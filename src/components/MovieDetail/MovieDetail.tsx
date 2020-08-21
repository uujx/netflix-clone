import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import Spinner from '../UI/Spinner/Spinner'
import Button from '../UI/Button/Button'
import AddLogo from '../../components/UI/AddLogo/AddLogo'
import PlayLogo from '../../components/UI/PlayLogo/PlayLogo'
import { Movie } from '../../model/Movie.model'
import { RootState } from '../../store/reducers/index'
import * as actions from '../../store/actions/index'
import styles from './MovieDetail.module.scss'

interface MovieDetailProps {
  movie: Movie | null
}

const MovieDetail: React.FC<MovieDetailProps> = (props) => {
  const dispatch = useDispatch()
  const { loading, error, movies } = useSelector((state: RootState) => state.mylist)

  let isInList = false
  for (let movie of movies) {
    if (movie.id === props.movie?.id) {
      isInList = true
      break
    }
  }

  const onClickHandler = () => {
    if (isInList) {
      dispatch(actions.removeMovie(props.movie!))
    } else {
      dispatch(actions.addMovie(props.movie!))
    }
  }

  let detail = null
  if (props.movie) {
    detail = (
      <>
        <h1 className={styles.Title}>
          {props.movie.title || props.movie.name}
        </h1>
        <div className={styles.Info}>
          <p className={styles.Rating}>Rating: {props.movie.vote_average}</p>
          <p>
            Release date:{' '}
            {props.movie.release_date || props.movie.first_air_date}
          </p>
          <p>Language: {props.movie.original_language.toUpperCase()}</p>
        </div>
        <p className={styles.Desc}>{props.movie.overview}</p>
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
      </>
    )
  }

  return <div className={styles.MovieDetailContainer}>{detail}</div>
}

export default MovieDetail
