import { useState, useEffect, lazy, Suspense } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Container from './Container/Container'
import CardsPageView from '../views/CardsPageView'
import Modal from './modalBox/Modal'
import ModalCard from './modalBox/ModalCard'
import ContactForm from './ContactForm.js/ContactForm'
import Notification from './Notification/Notification'
import '../styles/index.scss'
// const ProductsList = lazy(() => {
//   import('./Products/ProductsList')
// })
function App() {
  const [showModal, setShowModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState({})
  const [nameError, setNameError] = useState(false)
  const [numberError, setNumberError] = useState(false)
  const [quantityNumberError, setQuantityNumberError] = useState(false)
  const [userData, setUserData] = useState({ name: '', number: '' })

  const charactersQuantity = (number, quantity, setError) => {
    if (number.length < quantity || number.length > quantity) {
      toast.error('Please type corrrect number')
      setError(true)
      return
    } else {
      setError(false)
      // return
    }
  }
  // console.log(quantityNumberError, 'bef')
  const submitForm = (name, number) => {
    if (!name) {
      setNameError('This field in required')
      return
    }
    if (!number) {
      setNumberError(true)
      return
    }

    charactersQuantity(number, 12, setQuantityNumberError)
    //&& quantityNumberError === false
    // console.log(quantityNumberError, 'after')
    if (!nameError && !numberError) {
      setUserData({ name, number })
      toast.success(`${name} and ${number} are registered`)
      console.log('Name:', name)
      console.log('Number:', number)
    }

    // reset()
  }
  // const reset = () => {
  //   setNameError(false)
  //   setNumberError(false)
  // }
  const toggleModal = (prop) => {
    setShowModal(!showModal)
    setSelectedProduct(prop)
  }

  return (
    <>
      {/* <Container> */}
      <Suspense fallback={<p>Loading...</p>}>
        <CardsPageView openModal={toggleModal} />
        {showModal && (
          <Modal onClose={toggleModal} product={selectedProduct}>
            <ModalCard product={selectedProduct} />
            <ContactForm
              onSubmit={submitForm}
              nameError={nameError}
              numberError={numberError}
              quantityNumberError={quantityNumberError}
            />
          </Modal>
        )}
        <Notification />
      </Suspense>
      {/* </Container> */}
    </>
  )
}
export default App
