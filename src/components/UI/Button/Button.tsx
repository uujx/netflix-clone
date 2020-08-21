import React from 'react'

import styles from './Button.module.scss'

interface ButtonProps {
  type: 'red' | 'black'
  clicked?: () => void
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className={props.type === 'red' ? styles.Red : styles.Black} onClick={props.clicked}>
      {props.children}
    </button>
  )
}

export default Button
