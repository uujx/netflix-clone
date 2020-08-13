import React from 'react'
import { useHistory } from 'react-router-dom'

import styles from './NotFound.module.scss'

const NotFound: React.FC = () => {
  const history = useHistory()

  const onClickHandler = () => {
    history.goBack()
  }

  return (
    <div className={styles.Container}>
      <h1 className={styles.Heading}>404</h1>
      <div>Nice try but... <button onClick={onClickHandler} className={styles.GoBack}>Go Back</button></div>
    </div>
  )
}

export default NotFound
