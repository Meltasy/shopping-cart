import ShoppingCartProvider from './context/ShoppingCartContext'
import Home from './pages/Home'
import './App.css'

function App() {

  return (
    <ShoppingCartProvider>
      <Home />
    </ShoppingCartProvider>
  )
}

export default App
