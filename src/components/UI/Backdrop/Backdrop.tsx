import React from 'react'

import styles from './Backdrop.module.scss'

interface BackdropProps {
  show: boolean
  onToggle: () => void
}

const Backdrop: React.FC<BackdropProps> = (props) => {
  if (props.show) {
    return <div className={styles.Backdrop} onClick={props.onToggle}></div>
  } else {
    return null
  }
}

export default Backdrop
