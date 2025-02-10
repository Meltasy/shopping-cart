import { useEffect, useRef } from 'react'
import CartItem from './CartItem'

const CartDialog = ({ productItems, addToCart, totalCost, handleDelete, showCart, handleShowCart }) => {
  const ref = useRef()

  useEffect(() => {
    if (!showCart) { return }
    const dialog = ref.current
    dialog.show()
    return () => {
      dialog.close()
    }
  }, [showCart])

  return (
    <dialog ref={ref} className='cartDialog'>
      <h1>Panier</h1>
      <div className='cartItems'>
        {addToCart.map(item => (
          <CartItem
            key={item.id}
            itemId={item.id}
            price={item.price}
            quantity={item.quantity}
            productItems={productItems}
            handleDelete={handleDelete}
          />
        ))}
      </div>
      <div>
        <h2>Total: €{totalCost}</h2>
      </div>
      <button onClick={() => handleShowCart(false)}>X</button>
    </dialog>
  )
}

export default CartDialog
