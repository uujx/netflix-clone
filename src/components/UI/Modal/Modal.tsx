import React from 'react'

import Backdrop from '../Backdrop/Backdrop'
import styles from './Modal.module.scss'

interface ModalProps {
  showModal: boolean
  toggleModal: () => void
}

const Modal: React.FC<ModalProps> = (props) => {
  return (
    <>
      <Backdrop show={props.showModal} onToggle={props.toggleModal} />
      <div className={props.showModal ? styles.Show : styles.Hide}>{props.children}</div>
    </>
  )
}

export default Modal
