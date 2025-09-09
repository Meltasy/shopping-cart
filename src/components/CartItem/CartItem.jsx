import styled from 'styled-components'

const Wrapper = styled.div`
  max-width: 600px;
  height: auto;
  padding: 10px;
  color: var(--text-color);
  background-color: white;
  border: 2px solid var(--primary-color);
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 20px;
`

const EachItem = styled.div`
  max-width: 250px;
`

const StyledImage = styled.img`
  max-width: 150px;
  max-height: 200px;
  object-fit: cover;
  border-radius: 10px;
`

const StyledButton = styled.button`
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  color: var(--background-color);
  background-color: var(--primary-color-dark);
  padding: 5px 10px;
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  margin: 5px 0;
`

const CartItem = ({ itemId, price, quantity, productItems, handleDelete }) => {
  const item = productItems.find(item => item.id === itemId)
  const totalCost = price * quantity
  if (item == null) return null

  return (
    <Wrapper key={item.id}>
      <EachItem>
        <p>{item.title}</p>
        <h4>€{price ? price.toFixed(2) : '0.00'}</h4>
        <h3>x {quantity}</h3>
        <h4>€{totalCost ? totalCost.toFixed(2): '0.00'}</h4>
      </EachItem>
      <StyledImage src={item.image} alt=' ' />
      <StyledButton onClick={() => handleDelete(itemId, price, quantity)}>X</StyledButton>
    </Wrapper>
  )
}

export default CartItem
