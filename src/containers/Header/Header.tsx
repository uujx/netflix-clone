import React, { useState, useEffect } from 'react'

import Search from '../Search/Search'
import NetflixLogo from '../../components/UI/NetflixLogo/NetflixLogo'
import BellLogo from '../../components/UI/BellLogo/BellLogo'
import NavigationItem from '../../components/NavigationItem/NavigationItem'
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
      <nav className={styles.NavContainer}>
        <NavigationItem url='/' name='Home' />
        <NavigationItem url='/tv' name='TV Shows' />
        <NavigationItem url='/movies' name='Movies' />
        <NavigationItem url='/recent' name='Recently Added' />
        <NavigationItem url='' name='My List' />
      </nav>
      <Search />
      <nav className={styles.NavContainer}>
        <NavigationItem url='' name='KIDS' />
        <NavigationItem url='' name='DVD' />
      </nav>
      <BellLogo />
    </header>
  )
}

export default Header
