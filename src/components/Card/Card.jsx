import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const Card = ({ url, id, name, country, phoneNumber }) => {
  return (
    <li className="mb-5 bg-white shadow-md">
      <Link to={`${url}${id}`} className="flex flex-col px-10 py-5 md:flex-row">
        <div className="flex flex-col">
          <div className="flex flex-col md:flex-row ">
            <p className="text-gray-700">{name}</p>
            <p className="ml-8 font-bold text-gray-700">{country}</p>
          </div>
          <h2>{phoneNumber}</h2>
        </div>
      </Link>
    </li>
  )
}

Card.propTypes = {
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  country: PropTypes.string.isRequired,
  phoneNumber: PropTypes.string.isRequired
}

export default Card
