import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
// import LocationIcon from '../../../assets/icons/location.svg'

const CardItem = ({ image, title, price, category }) => {
  return (
    <Link to="sadf" className="bg-white shadow-md">
      <img className="object-cover h-32" src={image} alt="Imagen de fondo" />
      <div className="px-5 py-4 border-b">
        <p className="text-sm text-gray-700">{title}</p>
        <p className="font-bold tracking-wide">${price}</p>
        <p className="text-sm text-gray-700">{category}</p>
      </div>
      <div className="px-5 py-4 text-gray-600" />
    </Link>
  )
}

export default CardItem
CardItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  category: PropTypes.string.isRequired
}
