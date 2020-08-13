import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Poster from '../../components/Poster/Poster'
import { RootState } from '../../store/reducers/index'
import useModal from '../../hooks/useModal'
import { Movie } from '../../model/Movie.model'
import styles from './SearchPage.module.scss'

const SearchPage: React.FC = () => {
  const { movies, loading, error } = useSelector(
    (state: RootState) => state.search
  )
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  const { modal, setShowModal } = useModal(selectedMovie)

  const onSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie)
    setShowModal(true)
  }

  const posters = movies.map((movie) => (
    <Poster key={movie.id} imgUrl={movie.poster_path} clicked={onSelectMovie.bind(null, movie)} />
  ))

  return (
    <div className={styles.Container}>
      {posters}
      {modal}
    </div>
  )
}

export default SearchPage
