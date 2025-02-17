import CartItem from '../../components/CartItem/CartItem'
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
`

const Cart = ({ productItems, cartItems, totalCost, handleDelete }) => {

  return (
    <div>
      <h1>Cart</h1>
      <Wrapper>
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
      </Wrapper>
      <div>
        <h2>Total: €{totalCost ? totalCost.toFixed(2): '0.00'}</h2>
      </div>
    </div>
  )
}
  
export default Cart
