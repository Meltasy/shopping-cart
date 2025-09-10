import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const StyledDialog = styled.dialog`
  padding: 0;
  border: none;
  border-radius: 10px;
  &::backdrop {
    background-color: var(--primary-color-light);
    opacity: 0.75;
  }
`

const Wrapper = styled.div`
  color: var(--text-color);
  background-color: var(--secondary-color-light);
  max-width: 500px;
  height: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  justify-items: center;
  align-items: center;
  gap: 0.6rem;
  @media (max-width: 480px) {
    max-width: min(90vw, 250px);
    gap: 0.3rem;
  }
`

const ExtraWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 1rem;
`

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  & h2 {
    margin: 0.5rem 0;
  }
`

const StyledImage = styled.img`
  max-width: 400px;
  max-height: 400px;
  object-fit: cover;
  border-radius: 10px;
  @media (max-width: 480px) {
    max-width: min(90vw, 200px);
    max-height: min(90vw, 200px);
  }
`

const DetailItem = ({ showDetail, itemId, title, price, imageUrl, description, children }) => {
  const ref = useRef()

  useEffect(() => {
    if (!showDetail || !ref.current) return
    const dialog = ref.current
    dialog.showModal()
    return () => {
      dialog.close()
    }
  }, [showDetail])

  return (
    <>
      <StyledDialog ref={ref}>
        <Wrapper key={itemId}>
          <ExtraWrapper>
            <TextWrapper>
              <h2>{title}</h2>
              <h2>€{price ? price.toFixed(2) : '0.00'}</h2>
            </TextWrapper>
            <div>{children}</div>
          </ExtraWrapper>
          <StyledImage src={imageUrl} alt=' ' />
          <p>{description}</p>
        </Wrapper>
      </StyledDialog>
    </>
  )
}

export default DetailItem
