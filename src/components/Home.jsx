import { NavLink, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Shop from './Shop.jsx'
import Products from './Products.jsx'
import Cart from './Cart.jsx'

const Home = () => {
  const { name } = useParams()
  const [productItems, setProductItems] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)
  // const [addToCart, setAddToCart] = useState([])
  // const [quantityCart, setQuantityCart] = useState(0)
  const [totalBasket, setTotalBasket] = useState(new Map())
  const [basketSize, setBasketSize] = useState(0)
  // const [buyProducts, setBuyProducts] = useState(null)

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
    if (!totalBasket.has(itemId)) {
      setTotalBasket(totalBasket.set(itemId, value))
      console.log(totalBasket)
    } else {
      setTotalBasket(totalBasket.set(itemId, totalBasket.get(itemId) + value))
    }
    setBasketSize(totalBasket.size)
    // const products = productItems.map((item) => ({ ...item, quantity: 0 }))
    // setBuyProducts(products.map(item => {
    //   if (item.id === itemId) {
    //     console.log('Match', value, item.quantity)
    //     return {
    //       ...item,
    //       quantity: value
    //     }
    //   } else {
    //     return item
    //   }
    // }))
    // console.log(buyProducts)
    // setAddToCart(addToCart.map(item => {
    //   if (item.id === itemId) {
    //     return {...item, quantity: value}
    //   } else {
    //     console.log('inside addToCart.map', item, itemId)
    //   }
    // }))
    // setAddToCart([ ...addToCart, { id: itemId, quantity: value } ])
    // console.log('addToCart:',addToCart)
    // setQuantityCart(addToCart.length + 1)
    // console.log(addToCart.length)
  }

  return (
    <>
      <header>
        <h1>My shopping cart</h1>
        <p>What do you want to buy today?</p>
      </header>
      <nav>
        <ul>
          <li>
            <NavLink to='../shop'>Galeries Libellule</NavLink>
          </li>
          <li>
            <NavLink to='../products'>Atelier</NavLink>
          </li>
          <li>
            <NavLink to='../cart'>Panier</NavLink>
            {/* <div className='quantityCart'>{quantityCart}</div> */}
            <div className='quantityCart'>{basketSize}</div>
          </li>
        </ul>
      </nav>
      <main>
        {name === 'products' ? (
          <Products productItems={productItems} handleSubmit={handleSubmit}/>
        ) : name === 'cart' ? (
          // <Cart buyProducts={buyProducts} addToCart={addToCart}/>
          <Cart productItems={productItems} totalBasket={totalBasket}/>
        ) : (
          <Shop productItems={productItems}/>
        )}
      </main>
      <footer>
        <p>Meltasy's magnificent shopping mall</p>
      </footer>
    </>
  )
}

export default Home
