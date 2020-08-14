import { ThunkDispatch } from 'redux-thunk'

import { FetchingMovieResponse } from '../../model/Movie.model'
import { RootState } from '../reducers/index'
import axios from '../../axios-movies'
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

const fetchMyListSuccess = (
  movies: any[]
): types.FetchMyListSuccessAction => {
  return {
    type: types.FETCH_MY_LIST_SUCCESS,
    movies
  }
}

export const fetchMyList = () => {
  return (
    dispatch: ThunkDispatch<
      RootState,
      undefined,
      types.FetchMyListActionTypes
    >,
    getState: () => RootState
  ) => {
    const state = getState()
    if (state.mylist.movies.length !== 0) {
      return
    }

    dispatch(fetchMyListStart())

    axios
      .get<FetchingMovieResponse>(
        `discover/tv?sort_by=popularity.desc&page=1&with_networks=213&include_null_first_air_dates=false`
      )
      .then((res) => {
        const filteredRes = res.data.results.filter(
          (movie) => movie.backdrop_path != null
        )
        dispatch(fetchMyListSuccess(filteredRes))
      })
      .catch((err) => {
        dispatch(fetchMyListFail(err.response.data.errors[0]))
      })
  }
}
