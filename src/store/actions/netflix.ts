import { ThunkDispatch } from 'redux-thunk'

import { FetchingMovieResponse } from '../../model/Movie.model'
import { RootState } from '../reducers/index'
import axios from '../../axios-movies'
import * as types from './actionTypes'

const fetchNetflixStart = (): types.FetchNetflixStartAction => {
  return {
    type: types.FETCH_NETFLIX_START
  }
}

const fetchNetflixFail = (error: string): types.FetchNetflixFailAction => {
  return {
    type: types.FETCH_NETFLIX_FAIL,
    error
  }
}

const fetchNetflixSuccess = (
  movies: any[]
): types.FetchNetflixSuccessAction => {
  return {
    type: types.FETCH_NETFLIX_SUCCESS,
    movies
  }
}

export const fetchNetflix = () => {
  return (
    dispatch: ThunkDispatch<
      RootState,
      undefined,
      types.FetchNetflixActionTypes
    >,
    getState: () => RootState
  ) => {
    const state = getState()
    if (state.netflix.movies.length !== 0) {
      return
    }

    dispatch(fetchNetflixStart())

    axios
      .get<FetchingMovieResponse>(
        `discover/tv?sort_by=popularity.desc&page=1&with_networks=213&include_null_first_air_dates=false`
      )
      .then((res) => {
        const filteredRes = res.data.results.filter(
          (movie) => movie.poster_path != null
        )
        dispatch(fetchNetflixSuccess(filteredRes))
      })
      .catch((err) => {
        dispatch(fetchNetflixFail(err.response.data.errors[0]))
      })
  }
}
