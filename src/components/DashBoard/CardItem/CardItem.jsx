import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const CardItem = ({ image, title, price, category }) => {
  return (
    <li className="bg-white shadow-md">
      <Link to="sadf" className="flex flex-col px-10 py-5 md:flex-row">
        <img
          className="object-cover h-32 pr-5"
          src={image}
          alt={`Product ${title}`}
        />
        <div className="flex flex-col justify-center px-5 py-4 border-l">
          <p className="text-sm text-gray-700">{title}</p>
          <p className="font-bold tracking-wide">${price}</p>
          <p className="text-sm text-gray-700">{category}</p>
        </div>
      </Link>
    </li>
  )
}

export default CardItem
CardItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired
}
