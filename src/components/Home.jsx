import { Link, useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'
import Shop from './Shop.jsx'
import Products from './Products.jsx'
import Cart from './Cart.jsx'

const Home = () => {
  const { name } = useParams()
  const [productItems, setProductItems] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

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

  return (
    <>
      <header>
        <h1>My shopping cart</h1>
        <p>What do you want to buy today?</p>
      </header>
      <nav>
        <ul>
          <li>
            <Link to='../shop'>Galeries Libellule</Link>
          </li>
          <li>
            <Link to='../products'>Atelier</Link>
          </li>
          <li>
            <Link to='../cart'>Panier</Link>
          </li>
        </ul>
      </nav>
      <main>
        {name === 'products' ? (
          <Products productItems={productItems}/>
        ) : name === 'cart' ? (
          <Cart productItems={productItems}/>
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
