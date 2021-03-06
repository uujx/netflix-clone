import * as types from '../actions/actionTypes'
import { MoviesState } from './stateTypes'

const initialState: MoviesState = {
  movies: [],
  loading: false,
  error: ''
}

const reducer = (
  state = initialState,
  action: types.SearchActionTypes
): MoviesState => {
  switch (action.type) {
    case types.SEARCH_START:
      return {
        ...state,
        loading: true,
        error: ''
      }

    case types.SEARCH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case types.SEARCH_SUCCESS:
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
