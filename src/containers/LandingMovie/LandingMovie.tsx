import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import _ from 'lodash'
import axios from '../../axios-movies'

import Button from '../../components/UI/Button/Button'
import { Movie, FetchingMovieResponse } from '../../model/Movie.model'
import styles from './LandingMovie.module.scss'

const LandingMovie: React.FC = () => {
  const [randomMovie, setRandomMovie] = useState<Movie>()

  useEffect(() => {
    axios
      .get<FetchingMovieResponse>(
        '/discover/movie?sort_by=popularity.desc&include_adult=false&include_video=false&page=1'
      )
      .then((res) => {
        const movie = _.shuffle(res.data.results)[0]
        setRandomMovie(movie)
      })
  }, [])

  let backgroundStyle = {}
  if (randomMovie) {
    backgroundStyle = {
      backgroundImage: `url(https://image.tmdb.org/t/p/original${randomMovie.backdrop_path})`,
      // backgroundPosition: '250px top',
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat'
    }
  }

  return (
    <div className={styles.LandingContainer} style={backgroundStyle}>
      <h1 className={styles.Title}>{randomMovie?.title || randomMovie?.name}</h1>
      <p className={styles.Desc}>{randomMovie?.overview}</p>
      <div>
        <Button type='play' />
        <Button type='add' />
      </div>
    </div>
  )
}

export default LandingMovie
