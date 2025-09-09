import { useEffect, useRef } from 'react'
import styled from 'styled-components'

const StyledDialog = styled.dialog`
  border: 2px solid var(--primary-color);
  border-radius: 10px;
  &::backdrop {
    background-color: var(--primary-color-light);
    opacity: 0.75;
  }
`

const Wrapper = styled.div`
  max-width: 600px;
  height: auto;
  padding: 10px;
  color: var(--text-color);
  background-color: white;
  justify-items: center;
`

const StyledImage = styled.img`
  max-width: 500px;
  max-height: 500px;
  object-fit: cover;
  border-radius: 10px;
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
          <h2>{title} €{price ? price.toFixed(2) : '0.00'}</h2>
          <StyledImage src={imageUrl} alt=' ' />
          <p>{description}</p>
          {children}
        </Wrapper>
      </StyledDialog>
    </>
  )
}

export default DetailItem
