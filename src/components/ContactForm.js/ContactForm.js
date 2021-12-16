import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import PropTypes from 'prop-types'

/* Поле **Name**
  - Считается невалидным, если осталось незаполненным. Текст ошибки: "This field in required"
  - Должно содержать только буквы. Текст ошибки: "Only letters allowed"
*/
export default function ContactForm({ onSubmit, nameError, numberError }) {
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [error, setError] = useState('')
  const handleChange = (e) => {
    const { name, value } = e.currentTarget
    // console.log(value.charCodeAt(), 'name')
    // if (value.charCodeAt() <= 64 && value.charCodeAt() >= 33) {
    //   // setError('Only letters allowed')
    //   toast.error(`${value} is wrong. Try again`)
    //   return
    // }

    switch (name) {
      case 'name':
        setName(value)
        break
      case 'number':
        setNumber(value)
        break
      default:
        return
    }
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
  const handleSubmit = (e) => {
    e.preventDefault()

    onSubmit(name, number)
    setName('')
    setNumber('')
  }

  return (
    <>
      <form onSubmit={handleSubmit} className="form">
        <label className="form__label">
          {nameError && <p className="error__word">Error</p>}
          <input
            autoComplete="off"
            className="form__input"
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Name"
            // pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            // required
          ></input>
          {nameError && <p className="error__message">{nameError}</p>}
        </label>

        <label className="form__label">
          {numberError && <p className="error__word">Error</p>}
          <input
            autoComplete="off"
            className="form__input"
            type="tel"
            name="number"
            value={number}
            onChange={handleChange}
            placeholder="Number"
            // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            // required
          ></input>
          {numberError && <p className="error__message">{numberError}</p>}
        </label>
        <button type="submit" className="form__button">
          Order &#8594;
        </button>
      </form>
    </>
  )
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
}
