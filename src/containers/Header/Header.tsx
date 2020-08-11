import React, { useState, useEffect } from 'react'

import Search from '../Search/Search'
import Navigation from '../../components/Navigation/Navigation'
import NetflixLogo from '../../components/UI/NetflixLogo/NetflixLogo'
import OtherNavigation from '../../components/OtherNavigation/OtherNavigation'
import BellLogo from '../../components/UI/BellLogo/BellLogo'
import styles from './Header.module.scss'

const Header: React.FC = () => {
  const [isScroll, setIsScroll] = useState(false)

  useEffect(() => {
    window.addEventListener('scroll', onScrollHandler)
    return () => {
      window.removeEventListener('scroll', onScrollHandler)
    }
  }, [])

  const onScrollHandler = () => {
    if (window.scrollY === 0) {
      setIsScroll(false)
    } else {
      setIsScroll(true)
    }
  }

  const backgroundStyle = [styles.Header]
  if (isScroll) {
    backgroundStyle.push(styles.Black)
  }

  return (
    <header className={backgroundStyle.join(' ')}>
      <NetflixLogo />
      <Navigation />
      <Search />
      <OtherNavigation />
      <BellLogo />
    </header>
  )
}

export default Header
