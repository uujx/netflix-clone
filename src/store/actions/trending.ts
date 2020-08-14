import { ThunkDispatch } from 'redux-thunk'

import { FetchingMovieResponse } from '../../model/Movie.model'
import { RootState } from '../reducers/index'
import axios from '../../axios-movies'
import * as types from './actionTypes'

const fetchTrendingStart = (): types.FetchTrendingStartAction => {
  return {
    type: types.FETCH_Trending_START
  }
}

const fetchTrendingFail = (error: string): types.FetchTrendingFailAction => {
  return {
    type: types.FETCH_Trending_FAIL,
    error
  }
}

const fetchTrendingSuccess = (
  movies: any[]
): types.FetchTrendingSuccessAction => {
  return {
    type: types.FETCH_Trending_SUCCESS,
    movies
  }
}

export const fetchTrending = () => {
  return (
    dispatch: ThunkDispatch<
      RootState,
      undefined,
      types.FetchTrendingActionTypes
    >,
    getState: () => RootState
  ) => {
    const state = getState()
    if (state.trending.movies.length !== 0) {
      return
    }

    dispatch(fetchTrendingStart())

    axios
      .get<FetchingMovieResponse>(`/trending/all/day`)
      .then((res) => {
        const filteredRes = res.data.results.filter(
          (movie) => movie.backdrop_path != null
        )
        dispatch(fetchTrendingSuccess(filteredRes))
      })
      .catch((err) => {
        dispatch(fetchTrendingFail(err.response.data.errors[0]))
      })
  }
}
