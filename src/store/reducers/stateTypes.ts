import { Movie } from '../../model/Movie.model'

export interface SearchState {
  movies: Movie[]
  loading: boolean
  error: string
}
