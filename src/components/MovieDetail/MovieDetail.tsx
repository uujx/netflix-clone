import React from 'react'

import { Movie } from '../../model/Movie.model'
import styles from './MovieDetail.module.scss'

interface MovieDetailProps {
  movie: Movie | null
}

const MovieDetail: React.FC<MovieDetailProps> = (props) => {
  let detail = null
  if (props.movie) {
    detail = (
      <>
        <h1 className={styles.Title}>
          {props.movie.title || props.movie.name}
        </h1>
        <div className={styles.Info}>
          <p className={styles.Rating}>Rating: {props.movie.vote_average}</p>
          <p>
            Release date:{' '}
            {props.movie.release_date || props.movie.first_air_date}
          </p>
          <p>Language: {props.movie.original_language.toUpperCase()}</p>
        </div>
        <p className={styles.Desc}>{props.movie.overview}</p>
        <div>
          <button className={styles.Play}>PLAY</button>
          <button className={styles.Add}>MY LIST</button>
        </div>
      </>
    )
  }

  return <div className={styles.MovieDetailContainer}>{detail}</div>
}

export default MovieDetail
