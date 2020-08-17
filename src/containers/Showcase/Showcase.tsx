import React, { useState, useEffect } from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'
import { useSelector, useDispatch } from 'react-redux'

import Spinner from '../../components/UI/Spinner/Spinner'
import { Movie } from '../../model/Movie.model'
import useModal from '../../hooks/useModal'
import useWindowWidth from '../../hooks/useWindowWidth'
import { RootState } from '../../store/reducers/index'
import * as stateTypes from '../../store/reducers/stateTypes'
import styles from './Showcase.module.scss'

SwiperCore.use([Navigation])

interface ShowcaseProps {
  title: string
  stateSelector: (state: RootState) => stateTypes.MoviesState
  action: Function
}

const Showcase: React.FC<ShowcaseProps> = (props) => {
  const { movies, loading, error } = useSelector(props.stateSelector)
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  const { modal, setShowModal } = useModal(selectedMovie)
  const dispatch = useDispatch()

  const width = useWindowWidth()
  let slidesPerView: number, slidesPerGroup: number
  if (width <= 600) {
    slidesPerView = 4
    slidesPerGroup = 2
  } else if (width <= 1024) {
    slidesPerView = 5
    slidesPerGroup = 3
  } else {
    slidesPerView = 7
    slidesPerGroup = 4
  }

  useEffect(() => {
    if (movies.length === 0) {
      dispatch(props.action())
    }
  }, [])

  const onSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie)
    setShowModal(true)
  }

  const swiperMovies = movies.map((movie) => (
    <SwiperSlide key={movie.id} className={styles.Poster}>
      {/* <h1 className={styles.Title}>{movie.title || movie.name}</h1> */}
      <img
        src={`http://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={movie.title}
        onClick={onSelectMovie.bind(null, movie)}
      />
    </SwiperSlide>
  ))

  return (
    <div className={styles.MovieShowcase}>
      <h2 className={styles.Heading}>{props.title}</h2>
      {loading ? (
        <Spinner />
      ) : (
        <Swiper
          className={styles.MoviesContainer}
          spaceBetween={10}
          slidesPerView={slidesPerView}
          slidesPerGroup={slidesPerGroup}
          speed={1000}
          navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
          {swiperMovies}
        </Swiper>
      )}
      {modal}
    </div>
  )
}

export default Showcase
