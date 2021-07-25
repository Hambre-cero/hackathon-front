/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

const PublicRoutes = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        !isAuthenticated ? (
          <Component {...props} />
        ) : (
          <Redirect to="/dashboard" />
        )
      }
    />
  )
}

PublicRoutes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}

export default PublicRoutes
