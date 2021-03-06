import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import ListingPage from '../../containers/ListingPage/ListingPage'
import { RootState } from '../../store/reducers/index'
import { fetchTVs } from '../../store/actions/index'

const TVShowsPage: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchTVs())
  }, [])

  return <ListingPage stateSelector={(state: RootState) => state.tv} />
}

export default TVShowsPage
