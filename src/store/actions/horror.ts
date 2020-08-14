import { ThunkDispatch } from 'redux-thunk'

import { FetchingMovieResponse } from '../../model/Movie.model'
import { RootState } from '../reducers/index'
import axios from '../../axios-movies'
import * as types from './actionTypes'

const fetchHorrorStart = (): types.FetchHorrorStartAction => {
  return {
    type: types.FETCH_HORROR_START
  }
}

const fetchHorrorFail = (error: string): types.FetchHorrorFailAction => {
  return {
    type: types.FETCH_HORROR_FAIL,
    error
  }
}

const fetchHorrorSuccess = (movies: any[]): types.FetchHorrorSuccessAction => {
  return {
    type: types.FETCH_HORROR_SUCCESS,
    movies
  }
}

export const fetchHorror = () => {
  return (
    dispatch: ThunkDispatch<RootState, undefined, types.FetchHorrorActionTypes>,
    getState: () => RootState
  ) => {
    const state = getState()
    if (state.horror.movies.length !== 0) {
      return
    }

    dispatch(fetchHorrorStart())

    axios
      .get<FetchingMovieResponse>(
        `/discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false&page=1&with_genres=27`
      )
      .then((res) => {
        const filteredRes = res.data.results.filter(
          (movie) => movie.backdrop_path != null
        )
        dispatch(fetchHorrorSuccess(filteredRes))
      })
      .catch((err) => {
        dispatch(fetchHorrorFail(err.response.data.errors[0]))
      })
  }
}
