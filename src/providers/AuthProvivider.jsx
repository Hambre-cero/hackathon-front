import React, { createContext } from 'react'
import PropTypes from 'prop-types'

export const AutContext = createContext({})

const AuthProvivider = ({ children }) => {
  return <AutContext.Provider value={{}}>{children}</AutContext.Provider>
}

AuthProvivider.propTypes = {
  children: PropTypes.node.isRequired
}

export default AuthProvivider
