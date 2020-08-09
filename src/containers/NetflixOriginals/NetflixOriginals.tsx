import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import axios from '../../axios-movies'

import { Movie, FetchingMovieResponse } from '../../model/Movie.model'
import styles from './NetflixOriginal.module.scss'

SwiperCore.use([Navigation])

const NetflixOriginals: React.FC = () => {
  const [trendingMovies, setTrendingMovies] = useState<Array<Movie>>([])

  useEffect(() => {
    axios.get<FetchingMovieResponse>('discover/tv?sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_networks=213&include_null_first_air_dates=false').then((res) => {
      setTrendingMovies(res.data.results)
    })
  }, [])

  return (
    <div className={styles.MovieShowcase}>
      <h2 className={styles.Heading}>Netflix Originals</h2>
      <Swiper
        className={styles.MoviesContainer}
        spaceBetween={20}
        slidesPerView={5}
        slidesPerGroup={2}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        {trendingMovies.map((movie) => (
          <SwiperSlide key={movie.id} className={styles.Poster}>
            <img
              src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}
              alt={movie.title}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default NetflixOriginals
