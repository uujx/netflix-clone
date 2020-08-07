import React from 'react'

import Search from '../../components/Search/Search'
import Navigation from '../../components/Navigation/Navigation'
import Logo from '../../components/UI/Logo/Logo'
import styles from './Header.module.scss'

const Header: React.FC = () => {
  return (
    <header className={styles.Header}>
      <Logo />
      <Navigation />
      <Search />
    </header>
  )
}

export default Header
