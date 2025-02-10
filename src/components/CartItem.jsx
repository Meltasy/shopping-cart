const CartItem = ({ itemId, price, quantity, productItems, handleDelete }) => {
  const item = productItems.find(item => item.id === itemId)
  const totalCost = price * quantity
  if (item == null) return null

  return (
    <div key={item.id} className='itemCart'>
      <img src={item.image} alt=' ' width={100} height={100}/>
      <div>
        <h4>{item.title} €{price}</h4>
        <h3>x{quantity} €{totalCost}</h3>
      </div>
      <button onClick={() => handleDelete(itemId, price, quantity)}>Delete</button>
    </div>
  )
}

export default CartItem
