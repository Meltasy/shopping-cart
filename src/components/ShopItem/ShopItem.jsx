import { useState } from 'react'
import styled from 'styled-components'
import DetailItem from '../DetailItem/DetailItem'
import ItemForm from '../ItemForm/ItemForm'

const Wrapper = styled.div`
  width: 300px;
  height: 550px;
  padding: 10px;
  color: var(--text-color);
  background-color: white;
  border: 2px solid var(--primary-color);
  border-radius: 10px;
  justify-items: center;
  align-self: center;
  align-content: end;
`

const StyledImage = styled.img`
  max-width: 225px;
  max-height: 225px;
  object-fit: cover;
  border-radius: 10px;
`

const StyledButton = styled.button`
  font-family: inherit;
  font-size: inherit;
  color: var(--background-color);
  background-color: var(--primary-color-dark);
  padding: 5px 10px;
  border: 2px solid var(--primary-color);
  border-radius: 5px;
  margin: 5px 0;
`

const ShopItem = ({ itemId, imageUrl, title, price, description, handleAdd }) => {
  const [showDetail, setShowDetail] = useState(false)

  return (
    <Wrapper key={itemId}>
      <StyledImage src={imageUrl} alt=' ' />
      <h3>{title} €{price ? price.toFixed(2) : '0.00'}</h3>
      <StyledButton onClick={() => setShowDetail(true)}>Show Detail</StyledButton>
      <DetailItem
        showDetail={showDetail}
        itemId={itemId}
        title={title}
        price={price}
        imageUrl={imageUrl}
        description={description}
      >
        <StyledButton onClick={() => setShowDetail(false)}>Back to Shop</StyledButton>
      </DetailItem>
      <ItemForm
        itemId={itemId} price={price} onSubmit={handleAdd} />
    </Wrapper>
  )
}

export default ShopItem
