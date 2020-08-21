import { combineReducers } from 'redux'
import search from './search'
import tv from './tv'
import trending from './trending'
import top from './top'
import netflix from './netflix'
import mylist from './mylist'
import action from './action'
import horror from './horror'
import docu from './docu'
import movies from './movies'
import recent from './recent'
import auth from './auth'

export const rootReducer = combineReducers({
  search,
  tv,
  trending,
  top,
  netflix,
  mylist,
  action,
  horror,
  docu,
  movies,
  recent,
  auth
})

export type RootState = ReturnType<typeof rootReducer>
