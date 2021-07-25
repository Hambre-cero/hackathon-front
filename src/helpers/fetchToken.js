import toast from 'react-hot-toast'

const baseUrl = process.env.REACT_APP_URL_BASE

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
