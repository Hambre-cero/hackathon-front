import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import LocationIcon from '../../../assets/icons/location.svg'
import '../../css/CardItem.css'

const CardItem = ({ id, image, title, price, category }) => {
  return (
    <Link to={`/dashboard/${id}/product`} key={id} className="CardItem">
      <img className="CardItem__photo" src={image} alt="Imagen de fondo" />
      <div className="CardItem__description">
        <p className="CardItem__description-info--2">{title}</p>
        <p className="CardItem__description-info--1">{price}</p>
        <p className="CardItem__description-info--2">{category}</p>
      </div>
      <div className="CardItem__location">
        <Link className="btn--link" to="/">
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
