import PropTypes from 'prop-types'
export default function ModalCard({ product }) {
  const { name, category, price } = product
  return (
    <div className="modal-box__product">
      <p className="modal-box__category">{category}</p>
      <p className="modal-box__name">{name}</p>
      <p className="price__box">
        <span className="price__sign">&#36;</span>
        <span className="price__worth">{price}</span>
      </p>
    </div>
  )
}
ModalCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    onClick: PropTypes.func,
  }),
}
