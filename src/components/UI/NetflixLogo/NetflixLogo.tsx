import React from 'react'

import netflixLogo from '../../../assets/images/Netflix_Logo_RGB.png'
import styles from './NetflixLogo.module.scss'


const NetflixLogo: React.FC = (props) => {
  return (
    <div className={styles.LogoContainer}>
      <img src={netflixLogo} alt='Netflix' className={styles.Logo} />
    </div>
  )
}

export default NetflixLogo
