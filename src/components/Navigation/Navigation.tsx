import React from 'react'

import NavigationItem from '../NavigationItem/NavigationItem'
import styles from './Navigation.module.scss'


const Navigation: React.FC = () => {
  return (
    <nav className={styles.Navigation}>
      <NavigationItem url='' name='Home' />
      <NavigationItem url='' name='TV Shows' />
      <NavigationItem url='' name='Movies' />
      <NavigationItem url='' name='Recently Added' />
      <NavigationItem url='' name='My List' />
    </nav>
  )
}

export default Navigation
