import React, { useState, useEffect, useRef } from 'react'

import Search from '../Search/Search'
import NetflixLogo from '../../components/UI/NetflixLogo/NetflixLogo'
import DropdownArrow from '../../components/UI/DropdownArrow/DropdownArrow'
import BellLogo from '../../components/UI/BellLogo/BellLogo'
import NavigationItem from '../../components/NavigationItem/NavigationItem'
import styles from './Header.module.scss'

const Header: React.FC = () => {
  const [isScroll, setIsScroll] = useState(false)
  const navRef = useRef<HTMLElement>(null)

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

  const onToggleDrawer = () => {
    navRef.current?.classList.toggle(styles.Show)
  }

  const backgroundStyle = [styles.Header]
  if (isScroll) {
    backgroundStyle.push(styles.Black)
  }

  return (
    <header className={backgroundStyle.join(' ')}>
      <NetflixLogo alone={false} />
      <DropdownArrow clicked={onToggleDrawer} />
      <nav className={styles.MainNav} ref={navRef} onClick={onToggleDrawer}>
        <NavigationItem url='/' name='Home' />
        <NavigationItem url='/tv' name='TV Shows' />
        <NavigationItem url='/movies' name='Movies' />
        <NavigationItem url='/recent' name='Recently Added' />
        <NavigationItem url='/mylist' name='My List' />
      </nav>
      <Search />
      <BellLogo />
      <nav className={styles.OtherNav}>
        <NavigationItem url='/logout' name='Logout' />
      </nav>
    </header>
  )
}

export default Header
