import React, { useState, useRef, useCallback } from 'react'
import { useHistory } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { ThunkDispatch } from 'redux-thunk'
import _ from 'lodash'

import { RootState } from '../../store/reducers/index'
import SearchIcon from '../../assets/images/search-icon.svg'
import * as actions from '../../store/actions/index'
import * as types from '../../store/actions/actionTypes'
import styles from './Search.module.scss'

const Search: React.FC = () => {
  const [search, setSearch] = useState<string>('')
  const inputRef = useRef<HTMLInputElement>(null)
  const history = useHistory()
  const dispatch = useDispatch<
    ThunkDispatch<RootState, undefined, types.SearchActionTypes>
  >()
  const debouncedDispatch = useCallback(_.debounce(dispatch, 800), [])

  const inputChangeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value
    setSearch(newSearch)

    if (newSearch !== '') {
      debouncedDispatch(actions.search(newSearch))
      history.push('/search')
    } else {
      history.push('/')
    }
  }

  return (
    <div className={styles.SearchContainer}>
      <SearchIcon className={styles.Icon} />
      <input
        className={styles.Input}
        type='text'
        ref={inputRef}
        value={search}
        onChange={inputChangeHandler}
        placeholder='Title of movie or TV show'
      />
    </div>
  )
}

export default Search
