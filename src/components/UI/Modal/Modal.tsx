import React from 'react'

import Backdrop from '../Backdrop/Backdrop'
import styles from './Modal.module.scss'

interface ModalProps {
  showModal: boolean
  toggleModal: () => void
  backdropUrl: string | null
}

const Modal: React.FC<ModalProps> = (props) => {
  const containerStyle = [styles.Container]
  if (props.showModal) {
    containerStyle.push(styles.Show)
  } else {
    containerStyle.push(styles.Hide)
  }

  const backgroundStyle = props.backdropUrl !== ''
    ? {
        backgroundImage: `url(https://image.tmdb.org/t/p/original${props.backdropUrl})`,
        // backgroundPosition: '250px top',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }
    : {}

  return (
    <>
      <Backdrop show={props.showModal} onToggle={props.toggleModal} />
      <div className={containerStyle.join(' ')} style={backgroundStyle}>
        {props.children}
      </div>
    </>
  )
}

export default Modal
