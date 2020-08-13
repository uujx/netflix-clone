import React from 'react'
import { Route, Switch, Redirect } from 'react-router-dom'

import Home from './containers/Home/Home'
import NotFound from './components/NotFound/NotFound'
import Layout from './hoc/Layout/Layout'

const App: React.FC = () => {
  const routes = (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route component={NotFound} />
    </Switch>
  )

  return <Layout>{routes}</Layout>
}

export default App
