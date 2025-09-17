import styled from 'styled-components'
import Icon from '@mdi/react'
import { mdiBasketRemoveOutline } from '@mdi/js'

const Wrapper = styled.div`
  color: var(--text-color);
  background-color: var(--secondary-color-light);
  width: 500px;
  height: auto;
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
  @media (max-width: 480px) {
    width: min(95vw, 350px);
    flex-wrap: wrap;
    justify-content: flex-start;
    gap: 0;
  }
`

const EachItem = styled.div`
  width: 250px;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: flex-start;
  gap: 0.5rem;
  @media (min-width: 481px) {
    flex: 1;
    order: 2;
  }
  @media (max-width: 480px) {
    width: 100%
    max-width: min(95vw, 250px);
    order: 3;
    margin-top: 1rem;
  }
`

const StyledImage = styled.img`
  max-width: 150px;
  max-height: 200px;
  object-fit: cover;
  border-radius: 10px;
  @media (min-width: 481px) {
    order: 1;
  }
  @media (max-width: 480px) {
    max-width: min(95vw, 150px);
    max-height: min(95vw, 200px);
    order: 1;
  }
`

const PriceQuantity = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const Quantity = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--secondary-color-dark);
  background-color: var(--secondary-color);
  margin: 0.5rem;
  padding: 0.5rem;
  border-radius: 5px;
`

const StyledButton = styled.button`
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  color: var(--background-color);
  background-color: var(--primary-color);
  margin: 0.3rem 0;
  padding: 0.5rem 0.6rem 0.3rem 0.5rem;
  outline: none;
  border: none;
  border-radius: 5px;
  align-self: flex-start;
  &:hover {
    color: var(--primary-color-dark);
    background-color: var(--primary-color-light);
  }
  @media (min-width: 481px) {
    order: 3;
  }
  @media (max-width: 480px) {
    order: 2;
    margin-left: auto;
  }
`

const CartItem = ({ itemId, price, quantity, productItems, handleDelete }) => {
  const item = productItems.find(item => item.id === itemId)
  const totalCost = price * quantity
  if (item == null) return null

  return (
    <Wrapper key={item.id}>
      <StyledImage src={item.image} alt=' ' />
      <EachItem>
        <h3>{item.title}</h3>
        <PriceQuantity>
          <h4>Price: €{price ? price.toFixed(2) : '0.00'}</h4>
          <Quantity>{quantity}</Quantity>
        </PriceQuantity>
        <h4>Total: €{totalCost ? totalCost.toFixed(2): '0.00'}</h4>
      </EachItem>
      <StyledButton onClick={() => handleDelete(itemId, price, quantity)}>
        <Icon path={mdiBasketRemoveOutline} size={1} />
      </StyledButton>
    </Wrapper>
  )
}

export default CartItem
