import React, { useState } from 'react'

import { Movie } from '../model/Movie.model'
import Modal from '../components/UI/Modal/Modal'
import MovieDetail from '../components/MovieDetail/MovieDetail'

const useModal = (movie: Movie | null) => {
  const [showModal, setShowModal] = useState<boolean>(false)

  const onToggleModal = () => {
    setShowModal((prevState) => !prevState)
  }

  let modal = (
    <Modal
      showModal={showModal}
      toggleModal={onToggleModal}
      backdropUrl={movie ? movie.backdrop_path || movie.poster_path : ''}>
      {<MovieDetail movie={movie} />}
    </Modal>
  )

  return { modal, setShowModal }
}

export default useModal
