import { ThunkDispatch } from 'redux-thunk'

import { FetchingMovieResponse } from '../../model/Movie.model'
import { RootState } from '../reducers/index'
import axios from '../../axios-movies'
import * as types from './actionTypes'

const searchStart = (): types.SearchStartAction => {
  return {
    type: types.SEARCH_START
  }
}

const searchFail = (error: string): types.SearchFailAction => {
  return {
    type: types.SEARCH_FAIL,
    error
  }
}

const searchSuccess = (movies: any[]): types.SearchSuccessAction => {
  return {
    type: types.SEARCH_SUCCESS,
    movies
  }
}

export const search = (query: string) => {
  return (
    dispatch: ThunkDispatch<RootState, undefined, types.SearchActionTypes>
  ) => {
    console.log('[action]')
    dispatch(searchStart())

    axios
      .get<FetchingMovieResponse>(
        `/search/movie?query=${encodeURIComponent(query)}`
      )
      .then((res) => {
        const filteredRes = res.data.results.filter(
          (movie) => movie.poster_path != null
        )
        dispatch(searchSuccess(filteredRes))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
