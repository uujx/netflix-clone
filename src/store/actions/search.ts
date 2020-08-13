import { ThunkDispatch } from 'redux-thunk'

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
      .get(`/search/movie?query=${encodeURIComponent(query)}`)
      .then((res) => {
        dispatch(searchSuccess(res.data.results))
      })
      .catch((err) => {
        console.log(err)
      })
  }
}
