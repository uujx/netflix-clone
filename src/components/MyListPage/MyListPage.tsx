import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

import ListingPage from '../../containers/ListingPage/ListingPage'
import { RootState } from '../../store/reducers/index'
import { fetchMyList } from '../../store/actions/index'

const MyListPage: React.FC = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchMyList())
  }, [])

  return <ListingPage stateSelector={(state: RootState) => state.mylist} />
}

export default MyListPage
