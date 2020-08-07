import React from 'react'

import styles from './NavigationItem.module.scss'

interface NavigationItemProps {
  url: string
  name: string
}

const NavigationItem: React.FC<NavigationItemProps> = (props) => {
  return (
    <li className={styles.NavigationItem}>
      <a href={props.url}>{props.name}</a>
    </li>
  )
}

export default NavigationItem
