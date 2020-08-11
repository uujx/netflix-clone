export type Movie = {
  id: number
  title: string
  name: string
  poster_path: string
  backdrop_path: string
  overview: string
  release_date: string
  first_air_date: string
  vote_average: number
  original_language: string
}

export type FetchingMovieResponse = {
  results: Array<Movie>
}