import React from 'react'
import { Link } from 'react-router-dom'

import styles from './NavigationItem.module.scss'

interface NavigationItemProps {
  url: string
  name: string
}

const NavigationItem: React.FC<NavigationItemProps> = (props) => {
  return (
    <li className={styles.NavigationItem}>
      <Link to={props.url}>{props.name}</Link>
    </li>
  )
}

export default NavigationItem
