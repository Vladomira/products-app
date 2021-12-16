const URL = 'https://run.mocky.io/v3/b7d36eea-0b3f-414a-ba44-711b5f5e528e'

export default async function fetchProducts(url) {
  const response = await fetch(URL)
  // console.log(response, 'res')
  return response.ok
    ? await response.json()
    : Promise.reject(new Error('Not found, sorry'))
}
