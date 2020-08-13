import { combineReducers } from "redux";
import search from './search'

export const rootReducer = combineReducers({
  search
})

export type RootState = ReturnType<typeof rootReducer>