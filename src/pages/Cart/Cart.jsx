import CartItem from '../../components/CartItem/CartItem'

const Cart = ({ productItems, addToCart, totalCost, handleDelete }) => {

  return (
    <div>
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
        <h2>Total: €{totalCost.toFixed(2)}</h2>
      </div>
    </div>
  )
}
  
export default Cart
