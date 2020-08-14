import React, { useState } from 'react'
import { useSelector } from 'react-redux'

import Poster from '../../components/Poster/Poster'
import Spinner from '../../components/UI/Spinner/Spinner'
import { RootState } from '../../store/reducers/index'
import useModal from '../../hooks/useModal'
import { Movie } from '../../model/Movie.model'
import * as stateTypes from '../../store/reducers/stateTypes'
import styles from './ListingPage.module.scss'

interface ListingPageProps {
  stateSelector: (state: RootState) => stateTypes.MoviesState
}

const ListingPage: React.FC<ListingPageProps> = (props) => {
  const { movies, loading, error } = useSelector(props.stateSelector)
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null)
  const { modal, setShowModal } = useModal(selectedMovie)

  const onSelectMovie = (movie: Movie) => {
    setSelectedMovie(movie)
    setShowModal(true)
  }

  const posters = movies.map((movie) => (
    <Poster
      key={movie.id}
      imgUrl={movie.poster_path}
      clicked={onSelectMovie.bind(null, movie)}
    />
  ))

  return (
    <div className={styles.Container}>
      {loading ? <Spinner /> : posters}
      {modal}
    </div>
  )
}

export default ListingPage
