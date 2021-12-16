import { useState, useEffect, lazy, Suspense } from 'react'
import fetchProducts from '../servises/FetchProducts'
import CardsList from '../components/CardsList/CardsList'

export default function CardsPageView({ openModal }) {
  const [products, setProducts] = useState([])

  useEffect(() => {
    fetchProducts().then((products) => {
      const data = products.map(({ name, category, price }) => {
        return { name, category, price }
      })

      setProducts(data)
    })
  }, [])
  return (
    <>
      <Suspense fallback={<p>Loading...</p>}>
        <CardsList products={products} openModal={openModal} />
        {/* {showModal && <Modal onClose={toggleModal} product={selectedProduct} />} */}
      </Suspense>
    </>
  )
}
