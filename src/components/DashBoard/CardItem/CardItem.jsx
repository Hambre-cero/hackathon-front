import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import LocationIcon from '../../../assets/icons/location.svg'
// import '../../css/CardItem.css'

const CardItem = ({ id, image, title, price, category }) => {
  return (
    <Link
      to={`/dashboard/${id}/product`}
      key={id}
      className="bg-white shadow-md"
    >
      <img className="h-32 object-cover" src={image} alt="Imagen de fondo" />
      <div className="px-5 py-4 border-b">
        <p className="text-sm text-gray-700">{title}</p>
        <p className="font-bold tracking-wide">${price}</p>
        <p className="text-sm text-gray-700">{category}</p>
      </div>
      <div className="px-5 py-4 text-gray-600">
        <Link
          className="flex not-italic justify-end delay-75 hover:text-gray-800"
          to="/"
        >
          Find Me
          <img className="icon" src={LocationIcon} alt="location icon" />
        </Link>
      </div>
    </Link>
  )
}

export default CardItem
CardItem.propTypes = {
  id: PropTypes.node.isRequired,
  image: PropTypes.node.isRequired,
  title: PropTypes.node.isRequired,
  price: PropTypes.node.isRequired,
  category: PropTypes.node.isRequired
}
