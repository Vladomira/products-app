// import { Route, Switch } from 'react-router-dom'
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
  const [nameError, setNameError] = useState('')
  const [numberError, setNumberError] = useState('')
  const [userData, setUserData] = useState({ name: '', number: '' })

  function isCorrectNumber(number) {
    const numberArr = number.split('')
    const x = numberArr.map((el) => {
      console.log(el.charCodeAt())
      if (el.charCodeAt() < 48 || el.charCodeAt() > 57) {
        return setNumberError('Only numbers allowed')
      }
    })
    return x
    // if (number.charCodeAt() <= 47 && number.charCodeAt() >= 58) {
    //   setNumberError('Only numbers allowed')
    //   return
    // }
  }
  const submitForm = (name, number) => {
    if (!name) {
      setNameError('This field in required')
      return
    }
    if (!number) {
      setNumberError('This field in required')
      return
    }
    isCorrectNumber(number)
    if (number.length < 12 || number.length > 12) {
      setNumberError('Should contain 12 characters')
      return
    }
    if (number.charCodeAt() <= 47 && number.charCodeAt() >= 58) {
      setNumberError('Only numbers allowed')
      return
    }

    setUserData({ name, number })
    toast.success(`${name} and ${number} are registered`)
    console.log('Name:', name)
    console.log('Number:', number)

    reset()
  }
  const reset = () => {
    setNameError(null)
    setNumberError(null)
  }
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
// if (name.charCodeAt() >= 33 && name.charCodeAt() <= 64) {
//   setNameError('Only letters allowed')
//   console.log(true)
//   return
// }

///

// const isCorrectName = (data) => {
//   const dataArr = data.split('')
//   // console.log(dataArr)
//   const wrongData = dataArr.map((el) => {
//     console.log(el.charCodeAt())
//     // if (data.charCodeAt() >= 33 && data.charCodeAt() <= 64) {
//     //   setNameError('Only letters allowed')
//     //   console.log(true)
//     // }
//     if (el.charCodeAt() <= 64 && el.charCodeAt() >= 33) {
//       //&& el.charCodeAt() >= 33

//       console.log(true)
//       setNameError('Only letters allowed')
//       //  return
//     }
//   })
//   return toast.error(`${data} is wrong. Try again`)
// }
// const isCorrectNumber = (number) => {
//   // 48-57
//   if (number.charCodeAt() <= 47 && number.charCodeAt() === 58) {
//     // &&
//     setNumberError('Only numbers allowed')
//     console.log(true)
//     return
//   }
// }
