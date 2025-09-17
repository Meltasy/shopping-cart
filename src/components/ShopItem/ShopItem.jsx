import { useState } from 'react'
import styled from 'styled-components'
import DetailItem from '../DetailItem/DetailItem'
import ItemForm from '../ItemForm/ItemForm'
import Icon from '@mdi/react'
import { mdiMagnifyPlusOutline } from '@mdi/js'
import { mdiMagnifyMinusOutline } from '@mdi/js'

const Wrapper = styled.div`
  color: var(--text-color);
  background-color: var(--secondary-color-light);
  width: 300px;
  height: 450px;
  margin: 0;
  padding: 0.6rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  @media (max-width: 480px) {
    width: min(95vw, 300px);
    height: auto;
  }
`

const StyledImage = styled.img`
  width: 225px;
  height: 225px;
  object-fit: contain;
  @media (max-width: 480px) {
    width: min(95vw, 225px);
    height: min(95vw, 225px);
  }
`

const ExtraWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 0.6rem;
  @media (max-width: 480px) {
    gap: 0.3rem;
  }
`

const SmallWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 0.6rem;
  @media (max-width: 480px) {
    gap: 0.3rem;
  }
`

const ButtonsWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StyledButton = styled.button`
  font-family: inherit;
  font-size: inherit;
  color: var(--secondary-color-dark);
  background-color: var(--secondary-color);
  margin: 0.3rem;
  padding: 0.5rem 0.6rem 0.3rem 0.5rem;
  border: none;
  border-radius: 5px;
`

const ShopItem = ({ itemId, imageUrl, title, price, description, handleAdd }) => {
  const [showDetail, setShowDetail] = useState(false)

  return (
    <Wrapper key={itemId}>
      <StyledImage src={imageUrl} alt=' ' />
      <ExtraWrapper>
        <h3>{title}</h3>
        <ButtonsWrapper>
          <SmallWrapper>
            <h3>€{price ? price.toFixed(2) : '0.00'}</h3>
            <StyledButton onClick={() => setShowDetail(true)}>
              <Icon path={mdiMagnifyPlusOutline} size={1} />
            </StyledButton>
            <DetailItem
              showDetail={showDetail}
              itemId={itemId}
              title={title}
              price={price}
              imageUrl={imageUrl}
              description={description}
            >
              <StyledButton onClick={() => setShowDetail(false)}>
                <Icon path={mdiMagnifyMinusOutline} size={1.5} />
              </StyledButton>
            </DetailItem>
          </SmallWrapper>
          <ItemForm itemId={itemId} price={price} onSubmit={handleAdd} />
        </ButtonsWrapper>
      </ExtraWrapper>
    </Wrapper>
  )
}

export default ShopItem
