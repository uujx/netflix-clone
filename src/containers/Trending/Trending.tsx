import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import axios from '../../axios-movies'

import styles from './Trending.module.scss'

SwiperCore.use([Navigation])

type TrendingMovie = {
  id: number
  title: string
  poster_path: string
  overview: string
  release_date: string
  rating: number
}

type TrendingMoviesResponse = {
  results: Array<TrendingMovie>
}

const Trending: React.FC = () => {
  const [trendingMovies, setTrendingMovies] = useState<Array<TrendingMovie>>([])

  useEffect(() => {
    axios.get<TrendingMoviesResponse>('/trending/all/day').then((res) => {
      setTrendingMovies(res.data.results)
    })
  }, [])

  return (
    <div className={styles.MovieShowcase}>
      <h2 className={styles.Heading}>Trending Now</h2>
      <Swiper
        className={styles.MoviesContainer}
        spaceBetween={20}
        slidesPerView={5}
        slidesPerGroup={3}
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

export default Trending
