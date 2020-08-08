import React from 'react'

import styles from './NavContainer.module.scss'

const NavContainer: React.FC = (props) => {
  return (
    <nav className={styles.NavContainer}>
      {props.children}
    </nav>
  )
}

export default NavContainer
