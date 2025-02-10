import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Navbar from './components/Navbar.jsx'
import Home from './pages/Home.jsx'
import Shop from './pages/Shop.jsx'
import CartDialog from './components/CartDialog.jsx'
import './App.css'

function App() {
  const { name } = useParams()
  const [productItems, setProductItems] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  const [addToCart, setAddToCart] = useState([])
  const [quantityCart, setQuantityCart] = useState(0)
  const [totalCost, setTotalCost] = useState(0)
  const [showCart, setShowCart] = useState(false)

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

  function handleShowCart(boolean) {
    if (boolean === true) { setShowCart(true) }
    else if (boolean === false) { setShowCart(false) }
  }

  function handleAdd(itemId, price, quantity) {
    if (addToCart.find(aTC => aTC.id === itemId)) {
      setTotalCost(totalCost + price * quantity)
      setAddToCart(addToCart.map(item => {
        if (item.id === itemId) {
          return { ...item, quantity: item.quantity + quantity }
        } else {
          return { ...item }
        }
      }))
    } else {
      setAddToCart([ ...addToCart, { id: itemId, price: price, quantity: quantity } ])
      setQuantityCart(quantityCart + 1)
      setTotalCost(totalCost + price * quantity)
    }
  }

  function handleDelete(itemId, price, quantity) {
    setAddToCart(addToCart.filter(aTC => aTC.id !== itemId))
    setQuantityCart(quantityCart - 1)
    setTotalCost(totalCost - price * quantity)
  }
  
  return (
    <>
      <Navbar quantityCart={quantityCart} handleShowCart={handleShowCart} />
      <main>
        {name === 'shop' ? (
          <Shop productItems={productItems} handleAdd={handleAdd} />
        ) : (
          <Home productItems={productItems} />
        )}
      <CartDialog
        productItems={productItems}
        addToCart={addToCart}
        totalCost={totalCost}
        handleDelete={handleDelete}
        showCart={showCart}
        handleShowCart={handleShowCart}
      />
      </main>
    </>
  )
}

export default App
