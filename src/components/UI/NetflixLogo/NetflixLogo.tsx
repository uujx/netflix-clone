import React from 'react'
import { useHistory } from 'react-router-dom'

import netflixLogo from '../../../assets/images/Netflix_Logo_RGB.png'
import styles from './NetflixLogo.module.scss'

interface NetflixLogoProps {
  alone: boolean
}

const NetflixLogo: React.FC<NetflixLogoProps> = (props) => {
  const history = useHistory()

  const onClickHandler = () => {
    history.push('/')
  }

  const containerStyle = props.alone ? styles.AloneLogo : styles.LogoContainer

  return (
    <div className={containerStyle} onClick={onClickHandler}>
      <img src={netflixLogo} alt='Netflix' className={styles.Logo} />
    </div>
  )
}

export default NetflixLogo
