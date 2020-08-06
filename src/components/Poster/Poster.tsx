import React from 'react'

interface PosterProps {
  posterURL: string
}

const Poster: React.FC<PosterProps> = (props) => {
  return (
    <div>
      <img src={`http://image.tmdb.org/t/p/w342${props.posterURL}`} />
    </div>
  )
}

export default Poster
