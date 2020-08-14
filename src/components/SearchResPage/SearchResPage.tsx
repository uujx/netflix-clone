import React from 'react'

import ListingPage from '../../containers/ListingPage/ListingPage'
import { RootState } from '../../store/reducers/index'

const SearchResPage: React.FC = () => {
  return <ListingPage stateSelector={(state: RootState) => state.search} />
}

export default SearchResPage
