import { ThunkDispatch } from 'redux-thunk'

import { FetchingMovieResponse } from '../../model/Movie.model'
import { RootState } from '../reducers/index'
import axios from 'axios'
import * as types from './actionTypes'

const authStart = (): types.AuthStartAction => {
  return {
    type: types.AUTH_START
  }
}

const authFail = (error: string): types.AuthFailAction => {
  return {
    type: types.AUTH_FAIL,
    error
  }
}

const authSuccess = (userId: string, token: string): types.AuthSuccessAction => {
  return {
    type: types.AUTH_SUCCESS,
    token,
    userId
  }
}

export const auth = (
  credential: { email: string; password: string },
  remember: boolean,
  isLogin: boolean
) => {
  return (
    dispatch: ThunkDispatch<RootState, undefined, types.AuthActionTypes>
  ) => {
    const url = isLogin
      ? 'https://uujx-netflix-clone.herokuapp.com/api/auth/signin'
      : 'https://uujx-netflix-clone.herokuapp.com/api/auth/signup'

    dispatch(authStart())

    axios
      .post(url, credential)
      .then((res) => {
        if (remember) {
          localStorage.setItem('userId', res.data.user._id)
          localStorage.setItem('token', res.data.token)
          localStorage.setItem('expireDate', res.data.expireDate)
        }

        const expireDate = new Date(res.data.expireDate)

        dispatch(authSuccess(res.data.user._id, res.data.token))
        dispatch(
          startExpirationTimer(
            (expireDate.getTime() - new Date().getTime())
          )
        )
      })
      .catch((err) => {
        dispatch(authFail(err.response.data))
      })
  }
}

export const logout = (): types.LogoutAction => {
  localStorage.removeItem('userId')
  localStorage.removeItem('token')
  localStorage.removeItem('expireDate')

  return {
    type: types.LOGOUT
  }
}

export const checkAuthValidity = () => {
  return (
    dispatch: ThunkDispatch<RootState, undefined, types.AuthActionTypes>
  ) => {
    const token = localStorage.getItem('token')
    const userId = localStorage.getItem('userId')

    if (!token || !userId) {
      dispatch(logout())
    } else {
      const expireDateString = localStorage.getItem('expireDate')
      const expireDate = new Date(expireDateString!)
      if (new Date() >= expireDate) {
        dispatch(logout())
      } else {
        dispatch(authSuccess(userId, token))
        dispatch(
          startExpirationTimer(
            (expireDate.getTime() - new Date().getTime())
          )
        )
      }
    }
  }
}

export const startExpirationTimer = (expiresIn: number) => {
  return (
    dispatch: ThunkDispatch<RootState, undefined, types.AuthActionTypes>
  ) => {
    setTimeout(() => {
      dispatch(logout())
    }, expiresIn)
  }
}
