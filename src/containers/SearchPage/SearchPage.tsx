import React from 'react'
import { useSelector } from 'react-redux'

import { RootState } from '../../store/reducers/index'
import styles from './SearchPage.module.scss'

const SearchPage: React.FC = () => {
  const searchState = useSelector((state: RootState) => state.search)
  
  return <div className={styles.Container}></div>
}

export default SearchPage
