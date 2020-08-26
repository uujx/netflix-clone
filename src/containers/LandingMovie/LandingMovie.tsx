import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
// import _ from 'lodash'
// import axios from '../../axios-movies'

import Button from '../../components/UI/Button/Button'
import PlayLogo from '../../components/UI/PlayLogo/PlayLogo'
import AddLogo from '../../components/UI/AddLogo/AddLogo'
import { RootState } from '../../store/reducers/index'
import * as actions from '../../store/actions/index'
import { Movie } from '../../model/Movie.model'
import styles from './LandingMovie.module.scss'

const movie: Movie = {
  id: 475557,
  name: 'Joker',
  title: 'Joker',
  poster_path: '/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg',
  backdrop_path: '/n6bUvigpRFqSwmPp1m2YADdbRBc.jpg',
  overview:
    'During the 1980s, a failed stand-up comedian is driven insane and turns to a life of crime and chaos in Gotham City while becoming an infamous psychopathic crime figure.',
  release_date: '2019-10-02',
  first_air_date: '',
  vote_average: 8.2,
  original_language: 'en'
}

const LandingMovie: React.FC = () => {
  const dispatch = useDispatch()
  const { loading, error, movies } = useSelector(
    (state: RootState) => state.mylist
  )

  let isInList = false
  for (let movie of movies) {
    if (movie.id === 475557) {
      isInList = true
      break
    }
  }

  const onClickHandler = () => {
    if (isInList) {
      dispatch(actions.removeMovie(movie))
    } else {
      dispatch(actions.addMovie(movie))
    }
  }

  return (
    <div className={styles.LandingContainer}>
      <h1 className={styles.Title}>{movie.title}</h1>
      <p className={styles.Desc}>{movie.overview}</p>
      <div>
        <Button type='red'>
          <PlayLogo />
          PLAY
        </Button>
        <Button type='black' clicked={onClickHandler}>
          {isInList ? (
            'REMOVE'
          ) : (
            <>
              <AddLogo />
              MY LIST
            </>
          )}
        </Button>
      </div>
    </div>
  )
}

export default LandingMovie
