import toast from 'react-hot-toast'

const baseUrl = process.env.REACT_APP_URL_BASE

const fetchNoToken = async (endpoint, data, method = 'GET') => {
  const urlFetch = `${baseUrl}/${endpoint}`
  if (method === 'GET') {
    try {
      const response = await fetch(urlFetch)
      return await response.json()
    } catch (error) {
      toast.error("This didn't work.")
    }
  } else {
    try {
      const formData = new FormData()
      formData.append('username', data.username)
      formData.append('password', data.password)

      const response = await fetch(urlFetch, {
        method,
        headers: {
          'Content-type': 'application/json'
        },
        body: formData
      })
      return await response.json()
    } catch (error) {
      toast.error("This didn't work.")
    }
  }
  return null
}

export default fetchNoToken
