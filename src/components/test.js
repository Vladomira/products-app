//   function isCorrectNumber(number) {
//     const numberArr = number.split('')
//     const x = numberArr.map((el) => {
//       // console.log(el.charCodeAt())
//       if (el.charCodeAt() < 48 || el.charCodeAt() > 57) {
//         return setNumberError('Only numbers allowed')
//       }
//     })
//     return x
//     // if (number.charCodeAt() <= 47 && number.charCodeAt() >= 58) {
//     //   setNumberError('Only numbers allowed')
//     //   return
//     // }
//   }
////
/////
// const charactersQuantity = (number, quantity) => {
//     if (number.length < quantity || number.length > quantity) {
//       toast.error('Please type corrrect number')
//       setNumberError('Should contain 12 characters')

//       return
//     }
//     return
//   }
////////////////
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
