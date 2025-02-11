import { useEffect, useRef } from 'react'
import CartItem from './CartItem'

const CartDialog = ({ productItems, addToCart, totalCost, handleDelete, showCart, handleShowCart }) => {
  const ref = useRef()

  useEffect(() => {
    if (!showCart) { return }
    const dialog = ref.current
    dialog.showModal()
    return () => {
      dialog.close()
    }
  }, [showCart])

  return (
    <dialog ref={ref}>
      <div class='closeBtn'>
        <button onClick={() => handleShowCart(false)}>X</button>
      </div>
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
      <div className='totalCost'>
        <h2>Total: €{totalCost}</h2>
      </div>
    </dialog>
  )
}

export default CartDialog
