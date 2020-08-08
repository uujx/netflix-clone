import React from 'react'

import bellLogo from '../../../assets/images/bell-logo.svg'
import styles from './BellLogo.module.scss'


const BellLogo: React.FC = (props) => {
  return (
    <div className={styles.LogoContainer}>
      <img src={bellLogo} alt='Bell' className={styles.Logo} />
    </div>
  )
}

export default BellLogo
