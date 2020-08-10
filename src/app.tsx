import React from 'react'

import Home from './containers/Home/Home'
import Layout from './hoc/Layout/Layout'
import Modal from './components/UI/Modal/Modal'
import MovieDetail from './components/MovieDetail/MovieDetail'

const App: React.FC = () => {
  return (
    <Layout>
      <Home />
    </Layout>
  )
}

export default App
