import { ThunkDispatch } from 'redux-thunk'

import { Movie } from '../../model/Movie.model'
import { RootState } from '../reducers/index'
import axios from 'axios'
import * as types from './actionTypes'

const fetchMyListStart = (): types.FetchMyListStartAction => {
  return {
    type: types.FETCH_MY_LIST_START
  }
}

const fetchMyListFail = (error: string): types.FetchMyListFailAction => {
  return {
    type: types.FETCH_MY_LIST_FAIL,
    error
  }
}

const fetchMyListSuccess = (movies: any[]): types.FetchMyListSuccessAction => {
  return {
    type: types.FETCH_MY_LIST_SUCCESS,
    movies
  }
}

export const fetchMyList = () => {
  return (
    dispatch: ThunkDispatch<RootState, undefined, types.MyListActionTypes>,
    getState: () => RootState
  ) => {
    const token = getState().auth.token

    dispatch(fetchMyListStart())

    axios
      .get('http://127.0.0.1:9000/api/movies?sortBy=createdAt:desc', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        dispatch(fetchMyListSuccess(res.data))
      })
      .catch((err) => {
        dispatch(fetchMyListFail(err.response.data))
      })
  }
}

const addRemoveMovieStart = (): types.AddRemoveListStartAction => {
  return {
    type: types.ADD_REMOVE_LIST_START
  }
}

const addRemoveMovieFail = (error: string): types.AddRemoveListFailAction => {
  return {
    type: types.ADD_REMOVE_LIST_FAIL,
    error
  }
}

const addRemoveMovieSuccess = (
  movie: any,
  isAdd: boolean
): types.AddRemoveListSuccessAction => {
  return {
    type: types.ADD_REMOVE_LIST_SUCCESS,
    movie,
    isAdd
  }
}

export const addMovie = (movie: Movie) => {
  return (
    dispatch: ThunkDispatch<RootState, undefined, types.MyListActionTypes>,
    getState: () => RootState
  ) => {
    dispatch(addRemoveMovieStart())

    const token = getState().auth.token
    const userId = getState().auth.userId
    axios
      .post(`http://127.0.0.1:9000/api/movies`, movie, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        dispatch(addRemoveMovieSuccess({ ...movie, userId }, true))
      })
      .catch((err) => {
        dispatch(addRemoveMovieFail(err.response.data))
      })
  }
}

export const removeMovie = (movie: Movie) => {
  return (
    dispatch: ThunkDispatch<RootState, undefined, types.MyListActionTypes>,
    getState: () => RootState
  ) => {
    dispatch(addRemoveMovieStart())

    const token = getState().auth.token
    const userId = getState().auth.userId
    axios
      .delete(`http://127.0.0.1:9000/api/movies/${movie.id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .then((res) => {
        dispatch(addRemoveMovieSuccess({ ...movie, userId }, false))
      })
      .catch((err) => {
        dispatch(addRemoveMovieFail(err.response.data))
      })
  }
}
