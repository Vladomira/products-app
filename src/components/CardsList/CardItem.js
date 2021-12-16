export default function CardItem({ name, category, price, onClick }) {
  // console.log('ALL:', name, category, price)
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
// {/* <div>
// <p className="modal-box__category">{category}</p>
// <p className="modal-box__name">{name}</p>
// <p className="price__box">
//   <span className="price__sign">&#36;</span>
//   <span className="price__worth">{price}</span>
// </p>
// </div> */}
