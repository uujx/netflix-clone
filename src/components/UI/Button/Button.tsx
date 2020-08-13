import React from 'react'

import PlayLogo from '../../../assets/images/play-button.svg'
import AddLogo from '../../../assets/images/add.svg'
import styles from './Button.module.scss'

interface ButtonProps {
  type: 'red' | 'black'
}

const Button: React.FC<ButtonProps> = (props) => {
  return (
    <button className={props.type === 'red' ? styles.Red : styles.Black}>
      {props.children}
    </button>
  )
}

export default Button
