import React, { useState } from 'react'

import MainContent from '../MainContent/MainContent'
import Modal from '../../components/UI/Modal/Modal'

const Home: React.FC = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <>
      <Modal />
      <MainContent />
    </>
  )
}

export default Home
