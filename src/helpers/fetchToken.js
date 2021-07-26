import toast from 'react-hot-toast'

const baseUrl = process.env.REACT_APP_URL_BASE

/**
 * 
 * @param {string} endpoint Por ejemplo 'users/me' NO SE PONE / antes de el texto '/users/me' NO
 * @param {any} data Data que quiera enviar, preferiblemente un objeto
 * @param {string} method Por default es Get, pero puede enviar cualquier otro metodo.
 * @returns Depende del endpoint, puede ser un objeto o nada.
 */

const fetchToken = async (endpoint, data, method = 'GET') => {
  const token = localStorage.getItem('tokenEdonate') || ''
  const urlFetch = `${baseUrl}/${endpoint}`
  if (method === 'GET') {
    try {
      const response = await fetch(urlFetch, {
        headers: {
          Authorization: token
        }
      })
      return await response.json()
    } catch (error) {
      toast.error("This didn't work.")
    }
  } else {
    try {
      const response = await fetch(urlFetch, {
        method,
        headers: {
          'Content-type': 'application/json',
          Authorization: token
        },
        body: JSON.stringify(data)
      })

      return await response.json()
    } catch (error) {
      toast.error("This didn't work.")
    }
  }
  return token
}

export default fetchToken
