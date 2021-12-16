export default function CardItem({ name, category, price }) {
  // console.log('ALL:', name, category, price)
  return (
    <>
      <p className="info__category">{category}</p>
      <p className="info__name">{name}</p>
      <p className="price__box">
        <span className="price__sign">&#36;</span>
        <span className="price__worth">{price}</span>
      </p>
    </>
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
