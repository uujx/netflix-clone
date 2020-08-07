import React from 'react'

import logo from '../../../assets/images/Netflix_Logo_RGB.png'
import styles from './Logo.module.scss'

const Logo: React.FC = () => {
  return (
    <div className={styles.LogoContainer}>
      <img src={logo} alt='Netflix' />
    </div>
  )
}

export default Logo
