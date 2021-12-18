export const controlName = (value) => {
  const res = /^[a-zA-Zа-яА-ЯёЁ'][a-zA-Z-а-яА-ЯёЁ' ]+[a-zA-Zа-яА-ЯёЁ']?$/.test(
    String(value)
  )
  return res
}
export const controlNumber = (number) => {
  const result = /[0-9]/.test(number)
  return result
}
export const errorMesssage = () => 'This field in required'

export const charactersQuantity = (number, quantity, setError) => {
  if (number.length !== 0 && number.length < quantity) {
    return false
  }
  return true
}
