import { combineReducers } from "redux";
import search from './search'
import fetch from './fetch'

export const rootReducer = combineReducers({
  search,
  fetch
})

export type RootState = ReturnType<typeof rootReducer>