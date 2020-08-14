import * as types from '../actions/actionTypes'
import { MoviesState } from './stateTypes'

const initialState: MoviesState = {
  movies: [],
  loading: false,
  error: ''
}

const reducer = (
  state = initialState,
  action: types.FetchActionActionTypes
): MoviesState => {
  switch (action.type) {
    case types.FETCH_ACTION_START:
      return {
        ...state,
        loading: true,
        error: ''
      }

    case types.FETCH_ACTION_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case types.FETCH_ACTION_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        movies: action.movies
      }

    default:
      return state
  }
}

export default reducer
