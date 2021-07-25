import PropTypes from 'prop-types'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import ReturnIcon from '../../../assets/icons/return.svg'
import LikeIcon from '../../../assets/icons/like.svg'
import ShareIcon from '../../../assets/icons/share.svg'

function InfoProduct({ match }) {
  const [state, setState] = useState({ loading: true, data: {} })

  const fetchProduct = async () => {
    const data = await fetch(
      `https://fakestoreapi.com/products/${match.params.idItem}`
    )
    const dataParse = await data.json()
    setState({ loading: false, data: dataParse })
  }

  useEffect(() => {
    fetchProduct()
  }, [])

  if (state.loading) {
    return 'cargando...'
  }

  return (
    <div className="shadow-md bg-white p-6">
      <div className="flex justify-between items-center">
        <Link
          to="/dashboard/home"
          type="button"
          className="InfoProduct__btnreturn"
        >
          <img className="icon" src={ReturnIcon} alt="return" />
        </Link>
        <div className="InfoProduct__social leading-none">
          <button type="button" className="InfoProduct">
            <img className="icon" src={LikeIcon} alt="return__btn pr-2" />
          </button>
          <button type="button" className="InfoProduct__btn pl-2">
            <img className="icon" src={ShareIcon} alt="return" />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-4 pt-6">
        <img className="bg-black" src={state.data.image} alt="producto" />
        <div className="InfoProduct__info">
          <h3 className="font-extrabold uppercase  tracking-wide">
            {state.data.title}
          </h3>
          <h4 className="uppercase text-sm">{state.data.category}</h4>
          <span className="uppercase pt-2 text-xs">
            Price
            <p className="text-2xl pt-2 text-green-400">{state.data.price}</p>
          </span>
          <div className="InfoProducto__description">
            <span className="description uppercase pt-2 text-xs border-b-3 border-gray-300">
              Description
            </span>
            <p className="text-xs pt-2 break-words">{state.data.description}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default InfoProduct
InfoProduct.propTypes = {
  match: PropTypes.node.isRequired
}
