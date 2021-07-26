import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Loader from '../../Loader/Loader'

const ProductDetails = () => {
  const { id } = useParams()
  const [item, setitem] = useState({
    loading: true
  })

  const getData = async (idProduct) => {
    const response = await fetch(
      `https://fakestoreapi.com/products/${idProduct}`
    )
    const data = await response.json()
    return data
  }

  useEffect(() => {
    getData(id).then((data) => setitem({ ...data, loading: false }))
    return () => {
      getData({})
    }
  }, [id])

  return (
    <div className="relative h-screen overflow-hidden">
      {item.loading ? (
        <Loader />
      ) : (
        <div className="relative z-20 flex flex-col items-center overflow-hidden bg-white md:flex-row">
          <div className="container relative flex px-6 py-16 mx-auto">
            <div className="relative z-20 flex flex-col sm:w-2/3 lg:w-2/5">
              <span className="w-20 h-2 mb-6 bg-gray-800" />
              <h1 className="flex flex-col text-4xl font-black leading-none text-gray-800 uppercase font-bebas-neue sm:text-5xl">
                {item.title}
              </h1>
              <p className="text-sm text-gray-700 sm:text-base dark:text-white">
                {item.description}
              </p>
            </div>
            <div className="relative hidden sm:block sm:w-1/3 lg:w-3/5">
              <img
                src={item.image}
                className="max-w-xs m-auto md:max-w-sm"
                alt={item.description}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default ProductDetails
