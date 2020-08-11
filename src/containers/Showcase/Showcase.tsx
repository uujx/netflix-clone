import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import axios from '../../axios-movies'

import { Movie, FetchingMovieResponse } from '../../model/Movie.model'
import useModal from '../../hooks/useModal'
import styles from './Showcase.module.scss'

SwiperCore.use([Navigation])

interface ShowcaseProps {
  title: string
  api: string
}

const Showcase: React.FC<ShowcaseProps> = (props) => {
  const [movies, setMovies] = useState<Array<Movie>>([])
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  const { modal, setShowModal } = useModal(selectedMovie)

  useEffect(() => {
    axios.get<FetchingMovieResponse>(props.api).then((res) => {
      const filteredMovies = res.data.results.filter(movie => {
        if (!movie.backdrop_path) {
          return false
        }
        return true
      })
      setMovies(filteredMovies)
    })
  }, [])

  const onSelectMovie = (movie: Movie) => {
    console.log(movie)
    setSelectedMovie(movie)
    setShowModal(true)
  }

  const swiperMovies = movies.map((movie) => (
    <SwiperSlide key={movie.id} className={styles.Poster}>
      <h1 className={styles.Title}>{movie.title || movie.name}</h1>
      <img
        src={`http://image.tmdb.org/t/p/original${movie.backdrop_path}`}
        alt={movie.title}
        onClick={onSelectMovie.bind(null, movie)}
      />
    </SwiperSlide>
  ))

  return (
    <div className={styles.MovieShowcase}>
      <h2 className={styles.Heading}>{props.title}</h2>

      <Swiper
        className={styles.MoviesContainer}
        spaceBetween={10}
        slidesPerView={7}
        slidesPerGroup={4}
        speed={1000}
        navigation
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}>
        {swiperMovies}
      </Swiper>

      {modal}
    </div>
  )
}

export default Showcase
