import CartItem from '../../components/CartItem/CartItem'

const Cart = ({ productItems, cartItems, totalCost, handleDelete }) => {

  return (
    <div>
      <h1>Cart</h1>
      <div className='cartItems'>
        {cartItems.map(item => (
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
        <h2>Total: €{totalCost ? totalCost.toFixed(2): '0.00'}</h2>
      </div>
    </div>
  )
}
  
export default Cart
