import { ThunkDispatch } from 'redux-thunk'

import { FetchingMovieResponse } from '../../model/Movie.model'
import { RootState } from '../reducers/index'
import axios from '../../axios-movies'
import * as types from './actionTypes'

const fetchActionStart = (): types.FetchActionStartAction => {
  return {
    type: types.FETCH_ACTION_START
  }
}

const fetchActionFail = (error: string): types.FetchActionFailAction => {
  return {
    type: types.FETCH_ACTION_FAIL,
    error
  }
}

const fetchActionSuccess = (movies: any[]): types.FetchActionSuccessAction => {
  return {
    type: types.FETCH_ACTION_SUCCESS,
    movies
  }
}

export const fetchAction = () => {
  return (
    dispatch: ThunkDispatch<RootState, undefined, types.FetchActionActionTypes>,
    getState: () => RootState
  ) => {
    const state = getState()
    if (state.action.movies.length !== 0) {
      return
    }

    dispatch(fetchActionStart())

    axios
      .get<FetchingMovieResponse>(
        `/discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=28`
      )
      .then((res) => {
        const filteredRes = res.data.results.filter(
          (movie) => movie.backdrop_path != null
        )
        dispatch(fetchActionSuccess(filteredRes))
      })
      .catch((err) => {
        dispatch(fetchActionFail(err.response.data.errors[0]))
      })
  }
}
