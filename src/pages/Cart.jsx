import CartItem from "../components/CartItem"

const Cart = ({ productItems, addToCart }) => {
  // const totalCostCart = ???

  return (
    <div>
      <h1>Panier</h1>
      <div className='cartItems'>
        {addToCart.map(item => (
          <CartItem
            key={item.id}
            itemId={item.id}
            quantity={item.quantity}
            productItems={productItems}
          />
        ))}
      </div>
      {/* <div>
        <h2>Total: €{totalCostCart}</h2>
      </div> */}
    </div>
  )
}
  
export default Cart
