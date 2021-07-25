/* eslint-disable no-shadow */
import PropTypes from 'prop-types'
import React, { createContext, useCallback, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import fetchNoToken from '../helpers/fetchNoToken'
import fetchToken from '../helpers/fetchToken'

export const AutContext = createContext({})

const initialState = {
  uid: null,
  cheking: true,
  logged: false
}

const AuthProvivider = ({ children }) => {
  const [auth, setAuth] = useState(initialState)

  const login = async (username, password) => {
    try {
      const response = await fetchNoToken(
        'api/external/login',
        { username, password },
        'POST'
      )

      if (response !== '' || null) {
        localStorage.setItem('tokenEdonate', `Bearer ${response}`)
        setAuth({
          cheking: false,
          logged: true
        })
      }
    } catch (error) {
      toast.error('User or password wrong!')
    }
  }

  const logOut = () => {
    localStorage.removeItem('tokenEdonate')
    setAuth({
      cheking: false,
      logged: false
    })
  }

  const register = async (userName, email, password) => {
    try {
      const response = await fetchNoToken(
        'register',
        { userName, email, password },
        'POST'
      )

      if (response.id !== '' || null) {
        localStorage.setItem('tokenEdonate', response.body)

        const {
          user: { uid, userName, email }
        } = response

        setAuth({
          uid,
          cheking: false,
          logged: true,
          name: userName,
          email
        })
        return true
      }
      return false
    } catch (error) {
      toast.error("This didn't work.")
    }
    return null
  }

  const tokenValidator = useCallback(async () => {
    const token = localStorage.getItem('tokenEdonate')
    if (!token) {
      setAuth({
        cheking: false,
        logged: false
      })
      return false
    }

    const response = await fetchToken('api/users/me')

    if (response.id !== '' || null) {
      // localStorage.setItem('tokenEdonate', response.headers.Authorization)

      const {
        response: { id, name, email }
      } = response

      setAuth({
        id,
        cheking: false,
        logged: true,
        name,
        email
      })
    } else {
      setAuth({
        cheking: false,
        logged: false
      })
      return false
    }
    return null
  }, [])

  return (
    <AutContext.Provider
      value={{
        auth,
        login,
        logOut,
        register,
        tokenValidator
      }}
    >
      <>
        {children}
        <Toaster />
      </>
    </AutContext.Provider>
  )
}

AuthProvivider.propTypes = {
  children: PropTypes.node.isRequired
}

export default AuthProvivider
