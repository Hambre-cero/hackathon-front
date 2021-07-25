/* eslint-disable no-unused-vars */
import { useContext, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect
} from 'react-router-dom'
import Loader from '../components/Loader/Loader'
import Landing from '../pages/Landing/Landing'
import Login from '../pages/Login/Login'
import NotFound from '../pages/NotFound/NotFound'
import Register from '../pages/Register/Register'
import { AutContext } from '../providers/AuthProvivider'
import DashBoardRouter from './DashBoardRouter'

const AppRouter = () => {
  const { auth, tokenValidator } = useContext(AutContext)
  useEffect(() => {
    tokenValidator()
  }, [tokenValidator])

  if (auth.cheking) {
    return <Loader />
  }

  return (
    <Router>
      <Switch>
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/404" component={NotFound} />
        <Route exact path="/" component={Landing} />
        <Route path="/dashboard" component={DashBoardRouter} />
        <Redirect to="/404" />
      </Switch>
    </Router>
  )
}

export default AppRouter
