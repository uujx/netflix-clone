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


  export const FETCH_START = 'FETCH_START'
  export const FETCH_SUCCESS = 'FETCH_SUCCESS'
  export const FETCH_FAIL = 'FETCH_FAIL'
  
  export interface FetchStartAction {
    type: typeof FETCH_START
  }
  
  export interface FetchSuccessAction {
    type: typeof FETCH_SUCCESS
    movies: any[]
  }
  
  export interface FetchFailAction {
    type: typeof FETCH_FAIL
    error: string
  }
  
  export type FetchActionTypes =
    | FetchStartAction
    | FetchSuccessAction
    | FetchFailAction


