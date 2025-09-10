import { useState } from 'react'
import styled from 'styled-components'
import Icon from '@mdi/react'
import { mdiBasketPlusOutline } from '@mdi/js'

const StyledForm = styled.form`
  width: 100%;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 0.6rem;
  @media (max-width: 480px) {
    gap: 0.3rem;
  }
`

const buttonStyles =`
  font-family: inherit;
  font-size: inherit;
  font-style: inherit;
  color: var(--background-color);
  background-color: var(--primary-color);
  margin: 0.1rem;
  outline: none;
  border: none;
  border-radius: 5px;
  &:hover {
    color: var(--primary-color-dark);
    background-color: var(--primary-color-light);
  }
`

const StyledButton = styled.button`
  ${buttonStyles}
  padding: 0.3rem 0.6rem;
`

const StyledIconButton = styled.button`
  ${buttonStyles}
  padding: 0.5rem 0.6rem 0.3rem 0.5rem;
`

const StyledInput = styled(StyledButton)`
  max-width: 1rem;
`

const ItemForm = ({ itemId, price, onSubmit }) => {
  const [value, setValue] = useState(1)

  function handleChange(e) {
    setValue(Number(e.currentTarget.value))
  }

  function handleDecrease() {
    if (Number(value) > 0) setValue(Number(value) - 1)
  }

  function handleIncrease() {
    if (Number(value) < 10) setValue(Number(value) + 1)
  }

  return (
    <>
      <StyledForm
        onSubmit={(e) => {
        e.preventDefault()
        if (value === 0) return
        onSubmit(itemId, price, value)
        setValue(0)
      }}>
      <div>
        <StyledButton type='button' onClick={handleDecrease}>-</StyledButton>
          <StyledInput as='input'
            type='text'
            id='quantity'
            name='quantity'
            min='1'
            max='10'
            pattern='^\d+$'
            value={value}
            onChange={handleChange}
          />
        <StyledButton type='button' onClick={handleIncrease}>+</StyledButton>
      </div>
      <StyledIconButton type='submit'>
        <Icon path={mdiBasketPlusOutline} size={1} />  
      </StyledIconButton>
    </StyledForm>
  </>
  )
}

export default ItemForm
