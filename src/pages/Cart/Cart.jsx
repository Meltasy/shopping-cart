import CartItem from '../../components/CartItem/CartItem'
import styled from 'styled-components'

const Wrapper = styled.div`
  width: 100%;
  margin-bottom: 1rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
  }
`

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
`

const EmptyMessage = styled.div`
  color: var(--secondary-color-dark);
  background-color: var(--secondary-color-light);
  padding: 1rem;
  border-radius: 10px;
`

const Total = styled.div`
  max-width: 400px;
  height: min-content;
  margin-top: 1rem;
  padding: 1rem;
  color: var(--text-color);
  background-color: var(--secondary-color-light);
  border-radius: 10px;
  & h2 {
    border-top: 2px solid var(--secondary-color);
    padding-top: 1rem;
  }
  & h3 {
    padding-bottom: 1rem;
  }
`

const Cart = ({ productItems, cartItems, totalCost, handleDelete }) => {

  return (
    <>
      <h1>Cart</h1>
      <Wrapper>
        <CartItems>
          {cartItems.length === 0 ? (
            <EmptyMessage>
              <h3>Your shopping cart is empty.</h3>
            </EmptyMessage>
          ) : (
            cartItems.map(item => (
              <CartItem
                key={item.id}
                itemId={item.id}
                price={item.price}
                quantity={item.quantity}
                productItems={productItems}
                handleDelete={handleDelete}
              />
            ))
          )}
        </CartItems>
        {cartItems.length > 0 && (
          <Total>
            <h3>Subtotal: €{totalCost ? totalCost.toFixed(2): '0.00'}</h3>
            <h3>Shipping: Free!</h3>
            <h2>Total: €{totalCost ? totalCost.toFixed(2): '0.00'}</h2>
          </Total>
        )}
      </Wrapper>
    </>
  )
}
  
export default Cart
