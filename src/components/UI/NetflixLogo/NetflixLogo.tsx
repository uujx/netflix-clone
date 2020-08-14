import React from 'react'
import { useHistory } from 'react-router-dom'

import netflixLogo from '../../../assets/images/Netflix_Logo_RGB.png'
import styles from './NetflixLogo.module.scss'

const NetflixLogo: React.FC = (props) => {
  const history = useHistory()

  const onClickHandler = () => {
    history.push('/')
  }

  return (
    <div className={styles.LogoContainer} onClick={onClickHandler}>
      <img src={netflixLogo} alt='Netflix' className={styles.Logo} />
    </div>
  )
}

export default NetflixLogo
