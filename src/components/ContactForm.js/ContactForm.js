import { useState } from 'react'
import ErrorComponent from '../ErrorComponent/ErrorComponent'
import PropTypes from 'prop-types'
import rightArrow from '../../images/arrow-right.png'

import {
  controlName,
  controlNumber,
  errorMesssage,
  charactersQuantity,
} from '../../FunctionServises/CorrectValue'
import ErrorImg from '../ErrorImg'

export default function ContactForm({ ...props }) {
  const { onSubmit, nameError, numberError, quantityNumberError } = props
  const [name, setName] = useState('')
  const [number, setNumber] = useState('')
  const [nameTuched, setNameTouched] = useState(false)
  const [numberTuched, setNumberTouched] = useState(false)

  const [wrongName, setWrongName] = useState(false)
  const [wrongNumber, setWrongNumber] = useState(false)
  const [isEmptyName, setIsEmptyName] = useState(true)
  const [isEmptyNumber, setIsEmptyNumber] = useState(true)
  const [numberCharacters, setNumberCharacters] = useState(false)
  const [className, setClassName] = useState('form__input')
  const [classNumber, setClassNumber] = useState('form__input')
  const inputStyle = 'form__input'
  const inputError = 'error__input'
  // console.log(isEmptyName, 'isEmptyName')

  const blureHandler = (e) => {
    const { name, value } = e.target
    switch (name) {
      case 'name':
        // && String(value) !== ''
        if (!controlName(value)) {
          setWrongName(true)
          setClassName(inputError)
        }
        //
        value === '' && nameError
          ? setNameTouched(true) && setClassName(inputError)
          : setNameTouched(false)
        break

      case 'number':
        if (!controlNumber(value) && value !== '') {
          setWrongNumber(true) //only numbers
          setClassNumber(inputError)
        }
        if (charactersQuantity(value, 12) === false) {
          setNumberCharacters(true) //12characters
          setClassNumber(inputError)
        }

        value === '' && numberError !== true
          ? setNumberTouched(true)
          : setNumberTouched(false)
        break
      default:
        return
    }
  }

  const handleChange = (e) => {
    const { name, value } = e.target

    switch (name) {
      case 'name':
        if (value) {
          setIsEmptyName(false)
        }

        if (controlName(value) && value) {
          setClassName(inputStyle)
          setWrongName(false)
        }

        setNameTouched(false)
        setName(value)
        break

      case 'number':
        if (value) {
          setClassName(inputStyle)
          setIsEmptyNumber(false)
        }
        if (controlNumber(value)) {
          setWrongNumber(false)
        }
        if (charactersQuantity(value, 12) === true) {
          setClassNumber(inputStyle)
          setNumberCharacters(false)
        }
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
          {nameError && isEmptyName && <p className="error__word">Error</p>}
          <input
            autoComplete="off"
            className={className}
            type="text"
            name="name"
            value={name}
            onBlur={(e) => blureHandler(e)}
            onChange={handleChange}
            placeholder="Name"
          ></input>
          {nameTuched && (
            <>
              <ErrorComponent children={errorMesssage()} />
              <ErrorImg errorClass={'error__img--name error__img'} />
            </>
          )}
          {nameError && isEmptyName ? (
            <>
              <ErrorComponent children={errorMesssage()} />
              <ErrorImg errorClass={'error__img--name error__img'} />
            </>
          ) : null}

          {wrongName && (
            <>
              <ErrorComponent children={'Only letters allowed'} />
              <ErrorImg errorClass={'error__img--name error__img'} />
            </>
          )}
        </label>

        <label className="form__label">
          {numberError && isEmptyNumber && <p className="error__word">Error</p>}
          <input
            autoComplete="off"
            className={classNumber}
            // style={{
            //   outlineColor:
            //     numberError && isEmptyNumber === true
            //       ? '#e43f3f'
            //       : '0.4px solid rgba(0, 0, 0, 0.5)',
            // }}
            type="tel"
            name="number"
            value={number}
            onBlur={(e) => blureHandler(e)}
            onChange={handleChange}
            placeholder="Number"
          ></input>
          {numberTuched && <ErrorComponent children={errorMesssage()} />}
          {numberError && isEmptyNumber && (
            <>
              <ErrorComponent children={errorMesssage()} />
              <ErrorImg errorClass={'error__img--number error__img'} />
            </>
          )}

          {wrongNumber && (
            <>
              <ErrorComponent children={'Only numbers allowed'} />
            </>
          )}

          {quantityNumberError === true || numberCharacters === true ? (
            <ErrorComponent children={'Should contain 12 characters'} />
          ) : null}
        </label>

        <button type="submit" className="button__submit button">
          Order
          <img alt="" src={rightArrow} className="button__arrow-img" />
        </button>
      </form>
    </>
  )
}
ContactForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  nameError: PropTypes.bool,
  numberError: PropTypes.bool,
  quantityNumberError: PropTypes.bool,
}