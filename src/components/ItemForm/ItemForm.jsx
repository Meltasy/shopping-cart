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
  max-width: 2rem;
`

const ItemForm = ({ itemId, price, onSubmit }) => {
  const [value, setValue] = useState('1')
  const [prevValue, setPrevValue] = useState('1')

  function handleChange(e) {
    setValue((e.target.value))
  }

  function handleDecrease() {
    const num = Number(value) || 0
    if (num > 0) {
      setValue(String(num - 1))
      setPrevValue(String(num - 1))
    }
  }

  function handleIncrease() {
    const num = Number(value) || 0
    if (num < 10) {
      setValue(String(num + 1))
      setPrevValue(String(num + 1))
    }
  }

  function handleAdd(e) {
    e.preventDefault()
    const num = Number(value)
    if (!num || num <= 0) return
    onSubmit(itemId, price, num)
    setValue('0')
    setPrevValue('0')
  }

  return (
    <>
      <StyledForm
        onSubmit={handleAdd}>
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
            onFocus={() => {
              setPrevValue(value)
              setValue('')
            }}
            onBlur={() => {
              if (value === '') setValue(prevValue)
            }}
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
