import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Landing from '../pages/Landing/Landing'
import NotFound from '../pages/NotFound/NotFound'

const AppRouter = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" component={Landing} />
        <Redirect to="/404" component={NotFound} />
      </Switch>
    </Router>
  )
}

export default AppRouter
