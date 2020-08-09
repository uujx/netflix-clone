import React from 'react'

import Search from './containers/Search/Search'
import Home from './containers/Home/Home'
import Layout from './hoc/Layout/Layout'

const App: React.FC = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default App
