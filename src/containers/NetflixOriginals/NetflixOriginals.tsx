import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore, { Navigation } from 'swiper'

import Spinner from '../../components/UI/Spinner/Spinner'
import { Movie } from '../../model/Movie.model'
import useModal from '../../hooks/useModal'
import * as actions from '../../store/actions/index'
import { RootState } from '../../store/reducers/index'
import styles from './NetflixOriginal.module.scss'

SwiperCore.use([Navigation])

const NetflixOriginals: React.FC = () => {
  const { movies, loading, error } = useSelector(
    (state: RootState) => state.netflix
  )
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  const { modal, setShowModal } = useModal(selectedMovie)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchNetflix())
  }, [])

  const onSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie)
    setShowModal(true)
  }

  const posters = movies.map((movie) => (
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

      {loading ? (
        <Spinner />
      ) : (
        <Swiper
          className={styles.MoviesContainer}
          spaceBetween={20}
          slidesPerView={6}
          slidesPerGroup={4}
          speed={1000}
          navigation
          onSlideChange={() => console.log('slide change')}
          onSwiper={(swiper) => console.log(swiper)}>
          {posters}
        </Swiper>
      )}
      {modal}
    </div>
  )
}

export default NetflixOriginals
