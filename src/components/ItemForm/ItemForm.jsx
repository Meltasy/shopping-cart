import { useState } from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
  display: grid;
  background-color: var(--primary-color-light);
  padding: 20px 30px;
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

const StyledInput = styled(StyledButton)`
  max-width: 50px;
`

const StyledLabel = styled.label`
  font-weight: 700;
  font-size: 1.2rem;
  max-width: 50px;
`

const ItemForm = ({ itemId, price, onSubmit }) => {
  const [value, setValue] = useState(0)

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
      <StyledLabel htmlFor='quantity'>Quantity:</StyledLabel>
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
      <StyledButton type='submit'>Add to Cart</StyledButton>
    </StyledForm>
  </>
  )
}

export default ItemForm
