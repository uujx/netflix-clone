import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import ListingPage from '../../containers/ListingPage/ListingPage'
import { RootState } from '../../store/reducers/index'
import { fetchRecent } from '../../store/actions/index'

const TVShowsPage: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchRecent())
  }, [])

  return <ListingPage stateSelector={(state: RootState) => state.recent} />
}

export default TVShowsPage
