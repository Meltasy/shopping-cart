// const Cart = ({ buyProducts, addToCart }) => {
  const Cart = ({ productItems, totalBasket }) => {

  return (
    <div>
      <h1>Panier</h1>
      <p>{Object.entries(totalBasket)}</p>
      {/* {addToCart.map(i => (
        <p>{i.id} {i.quantity}</p>
      ))} */}
      {/* {buyProducts.map(item => {
        if (item.quantity !== 0) {
          <div key={item.id}>
            <h4>{item.title} €{item.price} {item.quantity}</h4>
            <img src={item.image} alt=' ' />
          </div>
        }
      })} */}
    </div>
  )
}
  
export default Cart
