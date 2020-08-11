import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import axios from '../../axios-movies'

import { Movie, FetchingMovieResponse } from '../../model/Movie.model'
import useModal from '../../hooks/useModal'
import styles from './NetflixOriginal.module.scss'

SwiperCore.use([Navigation])

const NetflixOriginals: React.FC = () => {
  const [netflixMovies, setNetflixMovies] = useState<Array<Movie>>([])
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  const { modal, setShowModal } = useModal(selectedMovie)

  useEffect(() => {
    axios
      .get<FetchingMovieResponse>(
        'discover/tv?sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_networks=213&include_null_first_air_dates=false'
      )
      .then((res) => {
        setNetflixMovies(res.data.results)
      })
  }, [])

  const onSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie)
    setShowModal(true)
  }

  const movies = netflixMovies.map((movie) => (
    <SwiperSlide key={movie.id} className={styles.Poster}>
      <img
        src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}
        onClick={onSelectMovie.bind(null, movie)}
      />
    </SwiperSlide>
  ))

  return (
    <div className={styles.MovieShowcase}>
      <h2 className={styles.Heading}>Netflix Originals</h2>

      <Swiper
        className={styles.MoviesContainer}
        spaceBetween={20}
        slidesPerView={6}
        slidesPerGroup={4}
        speed={1000}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        {movies}
      </Swiper>

      {modal}
    </div>
  )
}

export default NetflixOriginals
