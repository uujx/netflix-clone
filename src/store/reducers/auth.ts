import * as types from '../actions/actionTypes'
import { AuthState } from './stateTypes'

const initialState: AuthState = {
  isAuthed: false,
  token: '',
  loading: false,
  error: '',
  userId: ''
}

const reducer = (
  state = initialState,
  action: types.AuthActionTypes
): AuthState => {
  switch (action.type) {
    case types.AUTH_START:
      return {
        ...state,
        loading: true,
        error: ''
      }

    case types.AUTH_FAIL:
      return {
        ...state,
        loading: false,
        error: action.error
      }

    case types.AUTH_SUCCESS:
      return {
        ...state,
        loading: false,
        error: '',
        token: action.token,
        userId: action.userId,
        isAuthed: true
      }

    case types.LOGOUT:
      return {
        ...state,
        error: '',
        token: '',
        userId: '',
        isAuthed: false
      }

    default:
      return state
  }
}

export default reducer
