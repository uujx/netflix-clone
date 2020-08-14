import React from 'react'

import { Movie } from '../../model/Movie.model'
import styles from './Poster.module.scss'

interface PosterProps {
  imgUrl: string
  clicked: () => void
}

const Poster: React.FC<PosterProps> = (props) => {
  return (
    <div className={styles.PosterContainer} onClick={props.clicked}>
      <img src={`http://image.tmdb.org/t/p/w342${props.imgUrl}`} />
    </div>
  )
}

export default Poster
