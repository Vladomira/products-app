import { useState, useEffect } from 'react'
import PropTypes from 'prop-types'
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
    <section className="card-set__section">
      <Container>
        <h2 className="visually-hidden">Cards-set</h2>
        <ul className="card-set__list list">
          {data &&
            data.map(({ name, category, price }) => {
              return (
                <li key={shortid()} className="card-set__item">
                  <CardItem
                    name={name}
                    category={category}
                    price={price}
                    onClick={openModal}
                  />
                </li>
              )
            })}
        </ul>
        <button
          type="button"
          className="button__cheapest button"
          onClick={() => openModal(lowPriceItem)}
        >
          Buy cheapest
        </button>
      </Container>
    </section>
  )
}
CardsList.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number,
    onClick: PropTypes.func,
  }),
  openModal: PropTypes.func,
}
