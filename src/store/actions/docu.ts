import { ThunkDispatch } from 'redux-thunk'

import { FetchingMovieResponse } from '../../model/Movie.model'
import { RootState } from '../reducers/index'
import axios from '../../axios-movies'
import * as types from './actionTypes'

const fetchDocuStart = (): types.FetchDocuStartAction => {
  return {
    type: types.FETCH_DOCU_START
  }
}

const fetchDocuFail = (error: string): types.FetchDocuFailAction => {
  return {
    type: types.FETCH_DOCU_FAIL,
    error
  }
}

const fetchDocuSuccess = (
  movies: any[]
): types.FetchDocuSuccessAction => {
  return {
    type: types.FETCH_DOCU_SUCCESS,
    movies
  }
}

export const fetchDocu = () => {
  return (
    dispatch: ThunkDispatch<
      RootState,
      undefined,
      types.FetchDocuActionTypes
    >,
    getState: () => RootState
  ) => {
    const state = getState()
    if (state.docu.movies.length !== 0) {
      return
    }

    dispatch(fetchDocuStart())

    axios
      .get<FetchingMovieResponse>(
        `/discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=99`
      )
      .then((res) => {
        const filteredRes = res.data.results.filter(
          (movie) => movie.backdrop_path != null
        )
        dispatch(fetchDocuSuccess(filteredRes))
      })
      .catch((err) => {
        dispatch(fetchDocuFail(err.response.data.errors[0]))
      })
  }
}
