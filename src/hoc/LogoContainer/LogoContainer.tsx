import React from 'react'

import styles from './LogoContainer.module.scss'

const LogoContainer: React.FC = (props) => {
  return (
    <div className={styles.LogoContainer}>
      {props.children}
    </div>
  )
}

export default LogoContainer
