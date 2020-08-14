import { ThunkDispatch } from 'redux-thunk'

import { FetchingMovieResponse } from '../../model/Movie.model'
import { RootState } from '../reducers/index'
import axios from '../../axios-movies'
import * as types from './actionTypes'

const fetchTvStart = (): types.FetchTVStartAction => {
  return {
    type: types.FETCH_TV_START
  }
}

const fetchTvFail = (error: string): types.FetchTVFailAction => {
  return {
    type: types.FETCH_TV_FAIL,
    error
  }
}

const fetchTvSuccess = (movies: any[]): types.FetchTVSuccessAction => {
  return {
    type: types.FETCH_TV_SUCCESS,
    movies
  }
}

export const fetchTVs = () => {
  return (
    dispatch: ThunkDispatch<RootState, undefined, types.FetchTVActionTypes>,
    getState: () => RootState
  ) => {
    const state = getState()
    if (state.tv.movies.length !== 0) {
      return
    }

    dispatch(fetchTvStart())

    axios
      .get<FetchingMovieResponse>(
        `/discover/tv?sort_by=popularity.desc&page=1&include_null_first_air_dates=false}`
      )
      .then((res) => {
        const filteredRes = res.data.results.filter(
          (movie) => movie.poster_path != null
        )
        dispatch(fetchTvSuccess(filteredRes))
      })
      .catch((err) => {
        dispatch(fetchTvFail(err.response.data.errors[0]))
      })
  }
}
