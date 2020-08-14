import React from 'react'

import NavigationItem from '../NavigationItem/NavigationItem'
import NavContainer from '../../hoc/NavContainer/NavContainer'

const Navigation: React.FC = () => {
  return (
    <NavContainer>
      <NavigationItem url='/' name='Home' />
      <NavigationItem url='/tv' name='TV Shows' />
      <NavigationItem url='/movies' name='Movies' />
      <NavigationItem url='' name='Recently Added' />
      <NavigationItem url='' name='My List' />
    </NavContainer>
  )
}

export default Navigation
