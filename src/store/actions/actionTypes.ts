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
