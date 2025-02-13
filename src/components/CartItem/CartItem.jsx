const CartItem = ({ itemId, price, quantity, productItems, handleDelete }) => {
  const item = productItems.find(item => item.id === itemId)
  const totalCost = price * quantity
  if (item == null) return null

  return (
    <div key={item.id} className='itemCart'>
      <div className='details'>
        <p>{item.title}</p>
        <h4>€{price ? price.toFixed(2) : '0.00'}</h4>
        <h3>x {quantity}</h3>
        <h4>€{totalCost ? totalCost.toFixed(2): '0.00'}</h4>
      </div>
      <img src={item.image} alt=' ' />
      <button onClick={() => handleDelete(itemId, price, quantity)}>X</button>
    </div>
  )
}

export default CartItem
