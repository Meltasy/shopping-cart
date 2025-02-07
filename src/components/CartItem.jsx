const CartItem = ({ itemId, quantity, productItems }) => {
  const item = productItems.find(item => item.id === itemId)
  const totalCost = item.price * quantity
  if (item == null) return null

  return (
    <div key={item.id} className='itemCart'>
      <img src={item.image} alt=' ' width={100} height={100}/>
      <div>
      <h4>{item.title} €{item.price}</h4>
      <h3>x {quantity} €{totalCost}</h3>
      </div>
    </div>
  )
}

export default CartItem
