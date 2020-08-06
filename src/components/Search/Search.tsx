import React, { useState } from 'react'
import axios from '../../axios-movies'

const Search: React.FC = () => {
  const [movieName, setMovieName] = useState('')

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMovieName(event.target.value)
  }

  const onSubmitHandler = (event: React.FormEvent) => {
    event.preventDefault()

    axios
      .get(`/search/movie?query=${encodeURIComponent(movieName)}`)
      .then((res) => {
        console.log(res)
      })
  }

  return (
    <form onSubmit={onSubmitHandler}>
      <input
        type='text'
        value={movieName}
        onChange={inputChangeHandler}
        placeholder='Search movies'
      />
      <button type='submit'>Search</button>
    </form>
  )
}

export default Search
