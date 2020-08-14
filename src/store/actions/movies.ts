import { ThunkDispatch } from 'redux-thunk'

import { FetchingMovieResponse } from '../../model/Movie.model'
import { RootState } from '../reducers/index'
import axios from '../../axios-movies'
import * as types from './actionTypes'

const fetchMoviesStart = (): types.FetchMoviesStartAction => {
  return {
    type: types.FETCH_MOVIES_START
  }
}

const fetchMoviesFail = (error: string): types.FetchMoviesFailAction => {
  return {
    type: types.FETCH_MOVIES_FAIL,
    error
  }
}

const fetchMoviesSuccess = (
  movies: any[]
): types.FetchMoviesSuccessAction => {
  return {
    type: types.FETCH_MOVIES_SUCCESS,
    movies
  }
}

export const fetchMovies = () => {
  return (
    dispatch: ThunkDispatch<
      RootState,
      undefined,
      types.FetchMoviesActionTypes
    >,
    getState: () => RootState
  ) => {
    const state = getState()
    if (state.movies.movies.length !== 0) {
      return
    }

    dispatch(fetchMoviesStart())

    axios
      .get<FetchingMovieResponse>(
        `discover/movie?api_key=689e1326f6d02f0fa5c4192b415c39b3&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1`
      )
      .then((res) => {
        const filteredRes = res.data.results.filter(
          (movie) => movie.poster_path != null
        )
        dispatch(fetchMoviesSuccess(filteredRes))
      })
      .catch((err) => {
        dispatch(fetchMoviesFail(err.response.data.errors[0]))
      })
  }
}
