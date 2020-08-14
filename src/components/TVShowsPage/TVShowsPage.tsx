import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import ListingPage from '../../containers/ListingPage/ListingPage'
import { RootState } from '../../store/reducers/index'
import { fetchMovies } from '../../store/actions/index'

const TVShowsPage: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMovies('tv'))
  }, [])

  return <ListingPage stateSelector={(state: RootState) => state.fetch} />
}

export default TVShowsPage
