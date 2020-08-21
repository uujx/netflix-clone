import { Movie } from '../../model/Movie.model'

export interface MoviesState {
  movies: Movie[]
  loading: boolean
  error: string
}

export interface AuthState {
  isAuthed: boolean
  token: string
  loading: boolean
  error: string
}
