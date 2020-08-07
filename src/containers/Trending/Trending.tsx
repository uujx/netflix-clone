import React, { useState, useEffect } from 'react'
import axios from '../../axios-movies'

import Poster from '../../components/Poster/Poster'
import styles from './Trending.module.scss'

type TrendingMovie = {
  id: number
  title: string
  poster_path: string
  overview: string
  release_date: string
  rating: number
}

type TrendingMoviesResponse = {
  results: Array<TrendingMovie>
}

const Trending: React.FC = () => {
  const [trendingMovies, setTrendingMovies] = useState<Array<TrendingMovie>>([])

  useEffect(() => {
    axios.get<TrendingMoviesResponse>('/trending/all/week').then((res) => {
      setTrendingMovies(res.data.results)
    })
  }, [])

  return (
    <div className={styles.TrendingMovies}>
      {trendingMovies.map((movie) => {
        return <Poster key={movie.id} posterURL={movie.poster_path} />
      })}
    </div>
  )
}

export default Trending
