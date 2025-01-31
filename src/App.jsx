import { Link, useParams } from 'react-router-dom'
import Home from './components/Home.jsx'
import Shop from './components/Shop.jsx'
import Cart from './components/Cart.jsx'
import './App.css'

function App() {
  const { name } = useParams()

  return (
    <>
      <header>
        <h1>My shopping cart</h1>
        <p>What do you want to buy today?</p>
      </header>
      <nav>
        <ul>
          <li>
            <Link to='../home'>Galeries Libellule</Link>
          </li>
          <li>
            <Link to='../shop'>Atelier</Link>
          </li>
          <li>
            <Link to='../cart'>Panier</Link>
          </li>
        </ul>
      </nav>
      <main>
        {name === 'shop' ? (
          <Shop />
        ) : name === 'cart' ? (
          <Cart />
        ) : (
          <Home />
        )}
      </main>
      <footer>
        <p>Meltasy's magnificent shopping mall</p>
      </footer>
    </>
  )
}

export default App
