import React from 'react'

import { Movie } from '../../model/Movie.model'
import styles from './MovieDetail.module.scss'

interface MovieDetailProps {
  movie: Movie
}

const MovieDetail: React.FC<MovieDetailProps> = (props) => {
  return (
    <div className={styles.MovieDetailContainer}>
      <h1 className={styles.Title}>{props.movie.title || props.movie.name}</h1>
      <div className={styles.Info}>
        <p className={styles.Rating}>Rating: {props.movie.vote_average}</p>
        <p>
          Release date: {props.movie.release_date || props.movie.first_air_date}
        </p>
        <p>Runtime: 123</p>
      </div>
      <p className={styles.Desc}>{props.movie.overview}</p>
      <div>
        <button className={styles.Play}>PLAY</button>
        <button className={styles.Add}>MY LIST</button>
      </div>
    </div>
  )
}

export default MovieDetail
