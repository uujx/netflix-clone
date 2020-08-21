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

const authSuccess = (token: string): types.AuthSuccessAction => {
  return {
    type: types.AUTH_SUCCESS,
    token
  }
}

export const auth = (
  credential: { email: string; password: string },
  isLogin: boolean
) => {
  return (
    dispatch: ThunkDispatch<RootState, undefined, types.AuthActionTypes>
  ) => {
    const url = isLogin
      ? 'http://127.0.0.1:9000/api/auth/signin'
      : 'http://127.0.0.1:9000/api/auth/signup'

    dispatch(authStart())

    axios
      .post(url, credential)
      .then((res) => {
        dispatch(authSuccess(res.data.token))
      })
      .catch((err) => {
        dispatch(authFail(err.response.data))
      })
  }
}
