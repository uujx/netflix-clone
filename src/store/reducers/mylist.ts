import * as types from '../actions/actionTypes'
import { MoviesState } from './stateTypes'

const initialState: MoviesState = {
  movies: [],
  loading: false,
  error: ''
}

const reducer = (
  state = initialState,
  action: types.MyListActionTypes
): MoviesState => {
  switch (action.type) {
    case types.FETCH_MY_LIST_START:
      return {
        ...state,
        loading: true,
        error: ''
      }

    case types.FETCH_MY_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case types.FETCH_MY_LIST_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        movies: action.movies
      }

    case types.ADD_REMOVE_LIST_START:
      return {
        ...state,
        loading: true,
        error: ''
      }

    case types.ADD_REMOVE_LIST_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case types.ADD_REMOVE_LIST_SUCCESS:
      let updatedMovies
      if (action.isAdd) {
        updatedMovies = state.movies.concat(action.movie)
      } else {
        updatedMovies = state.movies.filter(movie => movie.id !== action.movie.id)
      }
      
      return {
        ...state,
        loading: false,
        error: '',
        movies: updatedMovies
      }

    default:
      return state
  }
}

export default reducer
