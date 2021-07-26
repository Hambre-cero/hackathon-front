import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Landing from '../pages/Landing/Landing'
import Login from '../pages/Login/Login'
import NotFound from '../pages/NotFound/NotFound'
import Register from '../pages/Register/Register'

const PublicRouter = () => {
  return (
    <Switch>
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route exact path="/404" component={NotFound} />
      <Route exact path="/" component={Landing} />
    </Switch>
  )
}

export default PublicRouter
