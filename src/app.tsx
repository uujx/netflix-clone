import React from 'react'

import Search from './components/Search/Search'
import Home from './containers/Home/Home'
import Poster from './components/Poster/Poster'

const App: React.FC = () => {
  return (
    <div>
      <Search />
      <Home />
    </div>
  )
}

export default App
