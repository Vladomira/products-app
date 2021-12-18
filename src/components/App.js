import { useState, Suspense } from 'react'
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
// import Container from './Container/Container'
import CardsPageView from '../views/CardsPageView'
import Modal from './modalBox/Modal'
import ModalCard from './modalBox/ModalCard'
import ContactForm from './ContactForm.js/ContactForm'
import Notification from './Notification/Notification'
import { charactersQuantity } from '../FunctionServises/CorrectValue'
import '../styles/index.scss'

function App() {
  const [showModal, setShowModal] = useState(false)
  const [selectedProduct, setSelectedProduct] = useState({})
  const [nameError, setNameError] = useState(false)
  const [numberError, setNumberError] = useState(false)
  const [quantityNumberError, setQuantityNumberError] = useState(false)
  const [userData, setUserData] = useState({ name: '', number: '' })

  const submitForm = (name, number) => {
    if (!name && !number) {
      setNameError(true)
      setNumberError(true)
    }
    if (!name) {
      setNameError(true)
      return
    }
    if (!number) {
      setNumberError(true)
      return
    }

    if (!number && name) {
      setNumberError(true)
    }
    if (!name && number) {
      setNameError(true)
    }

    if (charactersQuantity(number, 12) === false) {
      setQuantityNumberError(true)
    }
    if (charactersQuantity(number, 12) === true) {
      setQuantityNumberError(false)
    }

    // if (
    //   numberError !== true &&
    //   nameError !== true &&
    //   quantityNumberError !== true
    // ) {

    if (!numberError && !nameError) {
      setUserData({ name, number })
      toast.success(`${name} and ${number} are registered`)
      console.log('Name:', name)
      console.log('Number:', number)
    }
  }

  const toggleModal = (prop) => {
    setShowModal(!showModal)
    setSelectedProduct(prop)
  }

  return (
    <>
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
    </>
  )
}
export default App
