import { useState, useEffect } from 'react'
import CardItem from './CardItem'
import Container from '../Container/Container'
const shortid = require('shortid')

export default function CardsList({ products, openModal }) {
  const [lowPriceItem, setLowPriceItem] = useState([])
  const [data, setData] = useState([])

  useEffect(() => {
    const normalizeObj = products.map(({ name, price, category }) => {
      const arrName = name.split(' ')
      const modifyName = arrName.map((el) => {
        const capitalLetter = el[0].toUpperCase()
        const lowLetters = el.slice(1)
        const res = [capitalLetter, lowLetters].join('')

        return res
      })
      const res = modifyName.join(' ')
      const modifyObj = { name: res, price, category }
      return modifyObj
    })
    setData(normalizeObj)
  }, [products])

  useEffect(() => {
    const lowPrice = data
      .map(({ price }) => {
        return price
      })
      .sort((a, b) => {
        return a - b
      })
    const res = data.map((el) => {
      if (el.price === lowPrice[0]) {
        setLowPriceItem(el)
      }
    })
    return res
  }, [data])

  return (
    <section className="cards__section">
      <Container>
        <ul className="cards__list list">
          {data &&
            data.map(({ name, category, price }) => {
              return (
                <li key={shortid()} className="cards__item">
                  <CardItem
                    name={name}
                    category={category}
                    price={price}
                    onClick={openModal}
                  />
                  {/* <button
                    className="cards__btn"
                    type="button"
                    onClick={(e) => openModal({ name, category, price })}
                  >
                    Buy
                  </button> */}
                </li>
              )
            })}
        </ul>
        <button
          type="button"
          className="products__button"
          onClick={() => openModal(lowPriceItem)}
        >
          Buy cheapest
        </button>
      </Container>
    </section>
  )
}
// const res = { name: normalizeName, category: products.category }
// console.log(normalizeName, 'normalizeName')
// return res
// return setData([
//   { name: normalizeName, ...products.category, ...products.price },
// ])
