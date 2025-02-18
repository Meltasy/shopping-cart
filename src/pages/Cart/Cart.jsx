import CartItem from '../../components/CartItem/CartItem'
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 50px;
`

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 10px;
`

const Total = styled.div`
  max-width: 400px;
  height: min-content;
  margin-top: 10px;
  padding: 20px;
  color: var(--text-color);
  background-color: white;
  border: 2px solid var(--primary-color);
  border-radius: 10px;
  & h2 {
    border-top: 2px solid var(--primary-color);
    padding-top: 20px;
  }
`

const Cart = ({ productItems, cartItems, totalCost, handleDelete }) => {

  return (
    <>
      <h1>Cart</h1>
      <Wrapper>
        <CartItems>
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
        </CartItems>
        <Total>
          <h3>Subtotal: €{totalCost ? totalCost.toFixed(2): '0.00'}</h3>
          <h3>Shipping: Free!</h3>
          <h2>Total: €{totalCost ? totalCost.toFixed(2): '0.00'}</h2>
        </Total>
      </Wrapper>
    </>
  )
}
  
export default Cart
