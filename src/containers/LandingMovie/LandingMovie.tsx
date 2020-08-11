import React, { useState, useEffect } from 'react'
// import _ from 'lodash'
// import axios from '../../axios-movies'

import Button from '../../components/UI/Button/Button'
// import { Movie, FetchingMovieResponse } from '../../model/Movie.model'
import styles from './LandingMovie.module.scss'

const LandingMovie: React.FC = () => {
  // const [randomMovie, setRandomMovie] = useState<Movie>()

  // useEffect(() => {
  //   axios
  //     .get<FetchingMovieResponse>(
  //       '/discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
  //     )
  //     .then((res) => {
  //       const filteredMovies = res.data.results.filter(movie => movie.backdrop_path !== null)
  //       const movie = _.shuffle(filteredMovies)[0]
  //       setRandomMovie(movie)
  //     })
  // }, [])

  // let backgroundStyle = {}
  // if (randomMovie) {
  //   backgroundStyle = {
  //     backgroundImage: `url(https://image.tmdb.org/t/p/original${randomMovie.backdrop_path})`,
  //     // backgroundPosition: 'center',
  //     backgroundSize: 'cover',
  //     backgroundRepeat: 'no-repeat'
  //   }
  // }

  // const backgroundStyle = {
  //   backgroundImage: `url(https://image.tmdb.org/t/p/original/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg)`,
  //   backgroundPosition: 'center -20px',
  //   backgroundSize: 'cover',
  //   backgroundRepeat: 'no-repeat',
  //   transform: 'scaleX(-1)'
  // }

  return (
    <div className={styles.LandingContainer}>
      <h1 className={styles.Title}>Joker</h1>
      <p className={styles.Desc}>
        During the 1980s, a failed stand-up comedian is driven insane and turns
        to a life of crime and chaos in Gotham City while becoming an infamous
        psychopathic crime figure.
      </p>
      <div>
        <Button type='play' />
        <Button type='add' />
      </div>
    </div>
  )
}

export default LandingMovie
