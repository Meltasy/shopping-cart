import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Intro from './Intro.jsx'
import Shop from './Shop.jsx'
import Cart from './Cart.jsx'

const Home = () => {
  const { name } = useParams()
  const [productItems, setProductItems] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [addToCart, setAddToCart] = useState([])
  const [quantityCart, setQuantityCart] = useState(0)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', { mode: 'cors' })
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Server error')
      }
      return response.json()
    })
    .then((response) => {
      console.log(response)
      setProductItems(response)
    })
    .catch((error) => setError(error))
    .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Network error</p>

  function handleSubmit(itemId, value) {
    setAddToCart([ ...addToCart, { id: itemId, quantity: value } ])
    console.log('addToCart:',addToCart)
    setQuantityCart(addToCart.length + 1)
    console.log(addToCart.length)
  }

  return (
    <>
      <Navbar quantityCart={quantityCart}/>
      <main>
        {name === 'shop' ? (
          <Shop productItems={productItems} handleSubmit={handleSubmit}/>
        ) : name === 'cart' ? (
          <Cart productItems={productItems} addToCart={addToCart}/>
        ) : (
          <Intro productItems={productItems}/>
        )}
      </main>
    </>
  )
}

export default Home
