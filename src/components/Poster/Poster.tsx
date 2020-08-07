import React from 'react'

import styles from './Poster.module.scss'

interface PosterProps {
  posterURL: string
  title: string
}

const Poster: React.FC<PosterProps> = (props) => {
  return (
    <div className={styles.Poster}>
      <img src={`http://image.tmdb.org/t/p/original${props.posterURL}`} alt={props.title}/>
    </div>
  )
}

export default Poster
