import React, { useState, useRef, useCallback } from 'react'
import _ from 'lodash'

import axios from '../../axios-movies'
import searchIcon from '../../assets/images/search-icon.svg'
import styles from './Search.module.scss'

const Search: React.FC = () => {
  const [search, setSearch] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const fetchResult = useCallback(
    _.debounce(
      () => {
        console.log('fetching')
        axios
          .get(
            `/search/movie?query=${encodeURIComponent(inputRef.current!.value)}`
          )
          .then((res) => {
            // TODO: route to the search result page
            console.log(res)
          })
      },
      800,
      { leading: false, trailing: true }
    ),
    []
  )

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value)

    if (event.target.value !== '') {
      fetchResult()
    }
    // TODO: else route to the home page
  }

  return (
    <div className={styles.SearchContainer}>
      <img src={searchIcon} alt='searchIcon' className={styles.Icon} />
      <input
        className={styles.Input}
        type='text'
        ref={inputRef}
        value={search}
        onChange={inputChangeHandler}
        placeholder='Search movies'
      />
    </div>
  )
}

export default Search
