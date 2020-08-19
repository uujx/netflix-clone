import React from 'react'
import { Route, Switch } from 'react-router-dom'

import Home from './containers/Home/Home'
import NotFound from './components/NotFound/NotFound'
import LoginPage from './containers/LoginPage/LoginPage'
import SearchResPage from './components/SearchResPage/SearchResPage'
import TVShowsPage from './components/TVShowsPage/TVShowsPage'
import MoviesPage from './components/MoviesPage/MoviesPage'
import RecentPage from './components/RecentPage/RecentPage'
import Layout from './hoc/Layout/Layout'

const App: React.FC = () => {
  const routes = (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route path='/login' component={LoginPage} />
      <Route path='/search' component={SearchResPage} />
      <Route path='/tv' component={TVShowsPage} />
      <Route path='/movies' component={MoviesPage} />
      <Route path='/recent' component={RecentPage} />
      <Route component={NotFound} />
    </Switch>
  )

  return <Layout>{routes}</Layout>
}

export default App
