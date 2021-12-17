import { useEffect, useState } from 'react'
import ErrorComponent from '../ErrorComponent/ErrorComponent'
import PropTypes from 'prop-types'
import rightArrow from '../../images/arrow-right.png'
import errorImg from '../../images/error.png'

export default function ContactForm({ ...props }) {
  const { onSubmit, nameError, numberError, quantityNumberError } = props
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [nameTuched, setNameTouched] = useState(false)
  const [numberTuched, setNumberTouched] = useState(false)
  const [wrong, setWrong] = useState(false)

  const errorMesssage = () => 'This field in required'
  const controlName = (value) => {
    const res =
      /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/.test(
        String(value)
      )
    return res
  }
  const blureHandler = (e) => {
    const { name, value } = e.target

    switch (name) {
      case 'name':
        if (!controlName(value) && String(value) !== '') {
          setWrong(true)
        }
        value === '' ? setNameTouched(true) : setNameTouched(false)
        break
      case 'number':
        value === '' ? setNumberTouched(true) : setNumberTouched(false)
        break
      default:
        return
    }
  }
  const handleChange = (e) => {
    const { name, value } = e.target

    switch (name) {
      case 'name':
        if (controlName(value)) {
          setWrong(false)
        }

        setNameTouched(false)
        setName(value)
        break

      case 'number':
        setNumberTouched(false)
        setNumber(value)
        break
      default:
        return
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    onSubmit(name, number)
    setName('')
    setNumber('')
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <label className="form__label error__word">
          {nameError && <p className="error__word">Error</p>}
          <input
            autoComplete="off"
            className="form__input"
            type="text"
            name="name"
            value={name}
            onBlur={(e) => blureHandler(e)}
            onChange={handleChange}
            placeholder="Name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          ></input>
          {nameTuched && (
            <ErrorComponent children={errorMesssage()} />
            // <>
            //   <p className="error__message">{errorMesssage()}</p>
            // </>
          )}
          {wrong && <ErrorComponent children={'Only letters allowed'} />}
          {nameError && (
            <>
              <ErrorComponent children={errorMesssage()} />
              {/* <img alt="" src={errorImg} className="error__img" /> */}
            </>
          )}
        </label>

        <label className="form__label">
          {numberError && <p className="error__word">Error</p>}
          <input
            autoComplete="off"
            className="form__input"
            type="tel"
            name="number"
            value={number}
            onBlur={(e) => blureHandler(e)}
            onChange={handleChange}
            placeholder="Number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          ></input>
          {numberTuched && <ErrorComponent children={errorMesssage()} />}
          {numberError && (
            <>
              <ErrorComponent children={errorMesssage()} />
              <img alt="" src={errorImg} className="error__img" />
            </>
          )}
          {quantityNumberError && (
            <>
              <ErrorComponent children={'Should contain 12 characters'} />
            </>
          )}
        </label>
        <button
          type="submit"
          disabled={!name || !number}
          className="button__submit button"
        >
          Order
          <img alt="" src={rightArrow} className="button__arrow-img" />
        </button>
      </form>
    </>
  )
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
// useEffect(() => {
//   const isCorrectName = (data) => {
//     const dataArr = data.split('')
//     // console.log(dataArr)
//     const wrongData = dataArr.map((el) => {
//       console.log(el.charCodeAt())
//       // if (data.charCodeAt() >= 33 && data.charCodeAt() <= 64) {
//       //   setNameError('Only letters allowed')
//       //   console.log(true)
//       // }
//       if (el.charCodeAt() <= 64 && el.charCodeAt() >= 33) {
//         //&& el.charCodeAt() >= 33

//         console.log(true)
//         setError('Only letters allowed')
//       }
//     })
//     return toast.error(`${data} is wrong. Try again`)
//   }
// })
// const correctName = (name) => {
//   if (name) {
//     const data = name.split('')
//     console.log('data', data)
//   }
// }
// correctName()
// {/* <label className="form__label error__word">
//         {nameError ? (
//           <>
//             <p className="error__word">Error</p>
//             <input
//               autoComplete="off"
//               className="form__input"
//               type="text"
//               name="name"
//               value={name}
//               onBlur={(e) => blureHandler(e)}
//               onChange={handleChange}
//               placeholder="Name"
//               // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//             ></input>
//             <p className="error__message">{nameError}</p>
//           </>
//         ) : (
//           <input
//             autoComplete="off"
//             className="form__input"
//             type="text"
//             name="name"
//             value={name}
//             onChange={handleChange}
//             placeholder="Name"
//             // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//           ></input>

//         )}
//       </label> */}
