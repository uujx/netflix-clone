import React from 'react'

import styles from './Button.module.scss'

interface ButtonProps {
  type: 'play' | 'add'
}

const Button: React.FC<ButtonProps> = (props) => {
  const buttonStyle = [styles.Button]
  if (props.type === 'play') {
    buttonStyle.push(styles.Play)
  } else {
    buttonStyle.push(styles.Add)
  }

  return (
    <button className={buttonStyle.join(' ')}>
      {props.type === 'play' ? 'PLAY' : 'MY LIST'}
    </button>
  )
}

export default Button
