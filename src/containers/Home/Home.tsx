import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import LandingMovie from '../LandingMovie/LandingMovie'
import MainContent from '../MainContent/MainContent'
import * as actions from '../../store/actions/index'

const Home: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(actions.fetchMyList())
  }, [])

  return (
    <>
      <LandingMovie />
      <MainContent />
    </>
  )
}

export default Home
