import { Movie } from '../../model/Movie.model'

export const SEARCH_START = 'SEARCH_START'
export const SEARCH_SUCCESS = 'SEARCH_SUCCESS'
export const SEARCH_FAIL = 'SEARCH_FAIL'

export interface SearchStartAction {
  type: typeof SEARCH_START
}

export interface SearchSuccessAction {
  type: typeof SEARCH_SUCCESS
  movies: any[]
}

export interface SearchFailAction {
  type: typeof SEARCH_FAIL
  error: string
}

export type SearchActionTypes =
  | SearchStartAction
  | SearchSuccessAction
  | SearchFailAction

export const FETCH_TV_START = 'FETCH_TV_START'
export const FETCH_TV_SUCCESS = 'FETCH_TV_SUCCESS'
export const FETCH_TV_FAIL = 'FETCH_TV_FAIL'

export interface FetchTVStartAction {
  type: typeof FETCH_TV_START
}

export interface FetchTVSuccessAction {
  type: typeof FETCH_TV_SUCCESS
  movies: any[]
}

export interface FetchTVFailAction {
  type: typeof FETCH_TV_FAIL
  error: string
}

export type FetchTVActionTypes =
  | FetchTVStartAction
  | FetchTVSuccessAction
  | FetchTVFailAction

export const FETCH_Trending_START = 'FETCH_Trending_START'
export const FETCH_Trending_SUCCESS = 'FETCH_Trending_SUCCESS'
export const FETCH_Trending_FAIL = 'FETCH_Trending_FAIL'

export interface FetchTrendingStartAction {
  type: typeof FETCH_Trending_START
}

export interface FetchTrendingSuccessAction {
  type: typeof FETCH_Trending_SUCCESS
  movies: any[]
}

export interface FetchTrendingFailAction {
  type: typeof FETCH_Trending_FAIL
  error: string
}

export type FetchTrendingActionTypes =
  | FetchTrendingStartAction
  | FetchTrendingSuccessAction
  | FetchTrendingFailAction

export const FETCH_TOP_START = 'FETCH_TOP_START'
export const FETCH_TOP_SUCCESS = 'FETCH_TOP_SUCCESS'
export const FETCH_TOP_FAIL = 'FETCH_TOP_FAIL'

export interface FetchTopStartAction {
  type: typeof FETCH_TOP_START
}

export interface FetchTopSuccessAction {
  type: typeof FETCH_TOP_SUCCESS
  movies: any[]
}

export interface FetchTopFailAction {
  type: typeof FETCH_TOP_FAIL
  error: string
}

export type FetchTopActionTypes =
  | FetchTopStartAction
  | FetchTopSuccessAction
  | FetchTopFailAction

export const FETCH_NETFLIX_START = 'FETCH_NETFLIX_START'
export const FETCH_NETFLIX_SUCCESS = 'FETCH_NETFLIX_SUCCESS'
export const FETCH_NETFLIX_FAIL = 'FETCH_NETFLIX_FAIL'

export interface FetchNetflixStartAction {
  type: typeof FETCH_NETFLIX_START
}

export interface FetchNetflixSuccessAction {
  type: typeof FETCH_NETFLIX_SUCCESS
  movies: any[]
}

export interface FetchNetflixFailAction {
  type: typeof FETCH_NETFLIX_FAIL
  error: string
}

export type FetchNetflixActionTypes =
  | FetchNetflixStartAction
  | FetchNetflixSuccessAction
  | FetchNetflixFailAction

export const FETCH_ACTION_START = 'FETCH_ACTION_START'
export const FETCH_ACTION_SUCCESS = 'FETCH_ACTION_SUCCESS'
export const FETCH_ACTION_FAIL = 'FETCH_ACTION_FAIL'

export interface FetchActionStartAction {
  type: typeof FETCH_ACTION_START
}

export interface FetchActionSuccessAction {
  type: typeof FETCH_ACTION_SUCCESS
  movies: any[]
}

export interface FetchActionFailAction {
  type: typeof FETCH_ACTION_FAIL
  error: string
}

export type FetchActionActionTypes =
  | FetchActionStartAction
  | FetchActionSuccessAction
  | FetchActionFailAction

export const FETCH_HORROR_START = 'FETCH_HORROR_START'
export const FETCH_HORROR_SUCCESS = 'FETCH_HORROR_SUCCESS'
export const FETCH_HORROR_FAIL = 'FETCH_HORROR_FAIL'

export interface FetchHorrorStartAction {
  type: typeof FETCH_HORROR_START
}

export interface FetchHorrorSuccessAction {
  type: typeof FETCH_HORROR_SUCCESS
  movies: any[]
}

export interface FetchHorrorFailAction {
  type: typeof FETCH_HORROR_FAIL
  error: string
}

export type FetchHorrorActionTypes =
  | FetchHorrorStartAction
  | FetchHorrorSuccessAction
  | FetchHorrorFailAction

export const FETCH_DOCU_START = 'FETCH_DOCU_START'
export const FETCH_DOCU_SUCCESS = 'FETCH_DOCU_SUCCESS'
export const FETCH_DOCU_FAIL = 'FETCH_DOCU_FAIL'

export interface FetchDocuStartAction {
  type: typeof FETCH_DOCU_START
}

export interface FetchDocuSuccessAction {
  type: typeof FETCH_DOCU_SUCCESS
  movies: any[]
}

export interface FetchDocuFailAction {
  type: typeof FETCH_DOCU_FAIL
  error: string
}

export type FetchDocuActionTypes =
  | FetchDocuStartAction
  | FetchDocuSuccessAction
  | FetchDocuFailAction

export const FETCH_MOVIES_START = 'FETCH_MOVIES_START'
export const FETCH_MOVIES_SUCCESS = 'FETCH_MOVIES_SUCCESS'
export const FETCH_MOVIES_FAIL = 'FETCH_MOVIES_FAIL'

export interface FetchMoviesStartAction {
  type: typeof FETCH_MOVIES_START
}

export interface FetchMoviesSuccessAction {
  type: typeof FETCH_MOVIES_SUCCESS
  movies: any[]
}

export interface FetchMoviesFailAction {
  type: typeof FETCH_MOVIES_FAIL
  error: string
}

export type FetchMoviesActionTypes =
  | FetchMoviesStartAction
  | FetchMoviesSuccessAction
  | FetchMoviesFailAction

export const FETCH_RECENT_START = 'FETCH_RECENT_START'
export const FETCH_RECENT_SUCCESS = 'FETCH_RECENT_SUCCESS'
export const FETCH_RECENT_FAIL = 'FETCH_RECENT_FAIL'

export interface FetchRecentStartAction {
  type: typeof FETCH_RECENT_START
}

export interface FetchRecentSuccessAction {
  type: typeof FETCH_RECENT_SUCCESS
  movies: any[]
}

export interface FetchRecentFailAction {
  type: typeof FETCH_RECENT_FAIL
  error: string
}

export type FetchRecentActionTypes =
  | FetchRecentStartAction
  | FetchRecentSuccessAction
  | FetchRecentFailAction

export const AUTH_START = 'AUTH_START'
export const AUTH_SUCCESS = 'AUTH_SUCCESS'
export const AUTH_FAIL = 'AUTH_FAIL'
export const LOGOUT = 'LOGOUT'

export interface AuthStartAction {
  type: typeof AUTH_START
}

export interface AuthSuccessAction {
  type: typeof AUTH_SUCCESS
  token: string
  userId: string
}

export interface AuthFailAction {
  type: typeof AUTH_FAIL
  error: string
}

export interface LogoutAction {
  type: typeof LOGOUT
}

export type AuthActionTypes =
  | AuthStartAction
  | AuthSuccessAction
  | AuthFailAction
  | LogoutAction

export const FETCH_MY_LIST_START = 'FETCH_MY_LIST_START'
export const FETCH_MY_LIST_SUCCESS = 'FETCH_MY_LIST_SUCCESS'
export const FETCH_MY_LIST_FAIL = 'FETCH_MY_LIST_FAIL'
export const ADD_REMOVE_LIST_START = 'ADD_REMOVE_LIST_START'
export const ADD_REMOVE_LIST_SUCCESS = 'ADD_REMOVE_LIST_SUCCESS'
export const ADD_REMOVE_LIST_FAIL = 'ADD_REMOVE_LIST_FAIL'

export interface FetchMyListStartAction {
  type: typeof FETCH_MY_LIST_START
}

export interface FetchMyListSuccessAction {
  type: typeof FETCH_MY_LIST_SUCCESS
  movies: any[]
}

export interface FetchMyListFailAction {
  type: typeof FETCH_MY_LIST_FAIL
  error: string
}

export interface AddRemoveListStartAction {
  type: typeof ADD_REMOVE_LIST_START
}

export interface AddRemoveListSuccessAction {
  type: typeof ADD_REMOVE_LIST_SUCCESS
  movie: Movie
  isAdd: boolean
}

export interface AddRemoveListFailAction {
  type: typeof ADD_REMOVE_LIST_FAIL
  error: string
}

export type MyListActionTypes =
  | FetchMyListStartAction
  | FetchMyListSuccessAction
  | FetchMyListFailAction
  | AddRemoveListStartAction
  | AddRemoveListSuccessAction
  | AddRemoveListFailAction
