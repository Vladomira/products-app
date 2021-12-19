import PropTypes from 'prop-types'

export default function CardItem({ name, category, price, onClick }) {
  return (
    <div className="info__box">
      <p className="info__category">{category}</p>
      <p className="info__name">{name}</p>
      <div className="price__box-buy">
        <p className="price__box">
          <span className="price__sign">&#36;</span>
          <span className="price__worth">{price}</span>
        </p>
        <button
          className="price__btn-buy"
          type="button"
          onClick={(e) => onClick({ name, category, price })}
        >
          Buy
        </button>
      </div>
    </div>
  )
}
CardItem.propTypes = {
  name: PropTypes.string,
  price: PropTypes.number,
  category: PropTypes.string,

  onClick: PropTypes.func,
}
