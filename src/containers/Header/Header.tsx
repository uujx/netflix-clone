import React from 'react'

import Search from '../Search/Search'
import Navigation from '../../components/Navigation/Navigation'
import NetflixLogo from '../../components/UI/NetflixLogo/NetflixLogo'
import OtherNavigation from '../../components/OtherNavigation/OtherNavigation'
import BellLogo from '../../components/UI/BellLogo/BellLogo'
import styles from './Header.module.scss'

const Header: React.FC = () => {
  return (
    <header className={styles.Header}>
      <NetflixLogo />
      <Navigation />
      <Search />
      <OtherNavigation />
      <BellLogo />
    </header>
  )
}

export default Header
