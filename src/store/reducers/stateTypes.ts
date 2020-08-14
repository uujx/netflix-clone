import { Movie } from '../../model/Movie.model'

export interface MoviesState {
  movies: Movie[]
  loading: boolean
  error: string
}
