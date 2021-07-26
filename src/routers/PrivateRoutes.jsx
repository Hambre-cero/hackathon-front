/* eslint-disable react/jsx-props-no-spreading */
import PropTypes from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

const PrivateRoutes = ({ isAuthenticated, component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      component={(props) =>
        isAuthenticated ? <Component {...props} /> : <Redirect to="/" />
      }
    />
  )
}

PrivateRoutes.propTypes = {
  isAuthenticated: PropTypes.bool.isRequired,
  component: PropTypes.func.isRequired
}

export default PrivateRoutes
