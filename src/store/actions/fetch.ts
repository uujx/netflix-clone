import { ThunkDispatch } from 'redux-thunk'

import { FetchingMovieResponse } from '../../model/Movie.model'
import { RootState } from '../reducers/index'
import axios from '../../axios-movies'
import * as types from './actionTypes'

const fetchStart = (): types.FetchStartAction => {
  return {
    type: types.FETCH_START
  }
}

const fetchFail = (error: string): types.FetchFailAction => {
  return {
    type: types.FETCH_FAIL,
    error
  }
}

const fetchSuccess = (movies: any[]): types.FetchSuccessAction => {
  return {
    type: types.FETCH_SUCCESS,
    movies
  }
}

export const fetchMovies = (query: 'tv' | 'movie') => {
  return (
    dispatch: ThunkDispatch<RootState, undefined, types.FetchActionTypes>
  ) => {
    dispatch(fetchStart())

    axios
      .get<FetchingMovieResponse>(
        `/discover/${query}?sort_by=popularity.desc&page=1&include_null_first_air_dates=false}`
      )
      .then((res) => {
        const filteredRes = res.data.results.filter(
          (movie) => movie.poster_path != null
        )
        dispatch(fetchSuccess(filteredRes))
      })
      .catch((err) => {
        dispatch(fetchFail(err.response.data.errors[0]))
      })
  }
}
