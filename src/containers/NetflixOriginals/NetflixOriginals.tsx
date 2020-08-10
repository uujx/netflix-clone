import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import axios from '../../axios-movies'

import Modal from '../../components/UI/Modal/Modal'
import MovieDetail from '../../components/MovieDetail/MovieDetail'
import { Movie, FetchingMovieResponse } from '../../model/Movie.model'
import styles from './NetflixOriginal.module.scss'

SwiperCore.use([Navigation])

const NetflixOriginals: React.FC = () => {
  const [trendingMovies, setTrendingMovies] = useState<Array<Movie>>([])
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  const [showModal, setShowModal] = useState<boolean>(false)

  useEffect(() => {
    axios
      .get<FetchingMovieResponse>(
        'discover/tv?sort_by=popularity.desc&page=1&timezone=America%2FNew_York&with_networks=213&include_null_first_air_dates=false'
      )
      .then((res) => {
        setTrendingMovies(res.data.results)
      })
  }, [])

  const onSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie)
    setShowModal((prevState) => !prevState)
  }

  const onTaggleModal = () => {
    setShowModal((prevState) => !prevState)
  }

  const movies = trendingMovies.map((movie) => (
    <SwiperSlide key={movie.id} className={styles.Poster}>
      <img
        src={`http://image.tmdb.org/t/p/original${movie.poster_path}`}
        onClick={onSelectMovie.bind(null, movie)}
      />
    </SwiperSlide>
  ))

  const modal = selectedMovie && (
    <Modal
      showModal={showModal}
      toggleModal={onTaggleModal}
      backdropUrl={selectedMovie.backdrop_path || selectedMovie.poster_path}>
      {<MovieDetail movie={selectedMovie} />}
    </Modal>
  )

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
        {movies}
      </Swiper>

      {modal}
    </div>
  )
}

export default NetflixOriginals
