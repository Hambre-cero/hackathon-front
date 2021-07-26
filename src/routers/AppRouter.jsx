/* eslint-disable no-unused-vars */
import { useContext, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch
} from 'react-router-dom'
import Loader from '../components/Loader/Loader'
import { AutContext } from '../providers/AuthProvivider'
import DashBoardRouter from './DashBoardRouter'
import PrivateRoutes from './PrivateRoutes'
import PublicRouter from './PublicRouter'
import PublicRoutes from './PublicRoutes'

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
        <PrivateRoutes
          isAuthenticated={auth.logged}
          path="/dashboard"
          component={DashBoardRouter}
        />
        <PublicRoutes
          isAuthenticated={auth.logged}
          path="/"
          component={PublicRouter}
        />
        <Redirect to="/404" />
      </Switch>
    </Router>
  )
}

export default AppRouter
