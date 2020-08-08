import React, { useState, useRef, useCallback } from 'react'
import _ from 'lodash'

import axios from '../../axios-movies'
import styles from './Search.module.scss'

const Search: React.FC = () => {
  const [search, setSearch] = useState('')
  const lastestSearch = useRef<string>('')
  const fetchResult = useCallback(
    _.debounce(
      () => {
        console.log('fetching')
        axios
          .get(
            `/search/movie?query=${encodeURIComponent(lastestSearch.current)}`
          )
          .then((res) => {
            // TODO: route to the search result page
            console.log(res)
          })
      },
      500,
      { leading: false, trailing: true }
    ),
    []
  )

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)
    lastestSearch.current = event.target.value

    if (event.target.value !== '') {
      fetchResult()
    }
    // TODO: else route to the home page
  }

  return (
    <input
      className={styles.Input}
      type='text'
      value={search}
      onChange={inputChangeHandler}
      placeholder='Search movies'
    />
  )
}

export default Search
