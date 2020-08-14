import { ThunkDispatch } from 'redux-thunk'

import { FetchingMovieResponse } from '../../model/Movie.model'
import { RootState } from '../reducers/index'
import axios from '../../axios-movies'
import * as types from './actionTypes'

const fetchTopStart = (): types.FetchTopStartAction => {
  return {
    type: types.FETCH_TOP_START
  }
}

const fetchTopFail = (error: string): types.FetchTopFailAction => {
  return {
    type: types.FETCH_TOP_FAIL,
    error
  }
}

const fetchTopSuccess = (movies: any[]): types.FetchTopSuccessAction => {
  return {
    type: types.FETCH_TOP_SUCCESS,
    movies
  }
}

export const fetchTops = () => {
  return (
    dispatch: ThunkDispatch<RootState, undefined, types.FetchTopActionTypes>,
    getState: () => RootState
  ) => {
    const state = getState()
    if (state.top.movies.length !== 0) {
      return
    }

    dispatch(fetchTopStart())

    axios
      .get<FetchingMovieResponse>(`/movie/top_rated`)
      .then((res) => {
        const filteredRes = res.data.results.filter(
          (movie) => movie.backdrop_path != null
        )
        dispatch(fetchTopSuccess(filteredRes))
      })
      .catch((err) => {
        dispatch(fetchTopFail(err.response.data.errors[0]))
      })
  }
}
