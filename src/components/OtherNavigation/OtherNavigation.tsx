import React from 'react'

import NavContainer from '../../hoc/NavContainer/NavContainer'
import NavigationItem from '../NavigationItem/NavigationItem'
import bellLogo from '../../assets/images/bell-logo.svg'

const OtherNavigation: React.FC = () => {
  return (
    <NavContainer>
      <NavigationItem url='' name='KIDS'/>
      <NavigationItem url='' name='DVD'/>
    </NavContainer>
  )
}

export default OtherNavigation
