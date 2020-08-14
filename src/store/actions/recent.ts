import { ThunkDispatch } from 'redux-thunk'

import { FetchingMovieResponse } from '../../model/Movie.model'
import { RootState } from '../reducers/index'
import axios from '../../axios-movies'
import * as types from './actionTypes'

const fetchRecentStart = (): types.FetchRecentStartAction => {
  return {
    type: types.FETCH_RECENT_START
  }
}

const fetchRecentFail = (error: string): types.FetchRecentFailAction => {
  return {
    type: types.FETCH_RECENT_FAIL,
    error
  }
}

const fetchRecentSuccess = (
  movies: any[]
): types.FetchRecentSuccessAction => {
  return {
    type: types.FETCH_RECENT_SUCCESS,
    movies
  }
}

export const fetchRecent = () => {
  return (
    dispatch: ThunkDispatch<
      RootState,
      undefined,
      types.FetchRecentActionTypes
    >,
    getState: () => RootState
  ) => {
    const state = getState()
    if (state.recent.movies.length !== 0) {
      return
    }

    dispatch(fetchRecentStart())

    axios
      .get<FetchingMovieResponse>(
        `discover/tv?api_key=689e1326f6d02f0fa5c4192b415c39b3&language=en-US&sort_by=first_air_date.desc&page=1&with_networks=213&include_null_first_air_dates=false`
      )
      .then((res) => {
        const filteredRes = res.data.results.filter(
          (movie) => movie.poster_path != null
        )
        dispatch(fetchRecentSuccess(filteredRes))
      })
      .catch((err) => {
        dispatch(fetchRecentFail(err.response.data.errors[0]))
      })
  }
}
