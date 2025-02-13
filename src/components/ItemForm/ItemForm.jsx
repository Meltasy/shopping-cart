import { useState } from 'react'

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
      <form
        onSubmit={(e) => {
        e.preventDefault()
        if (value === 0) return
        onSubmit(itemId, price, value)
        setValue(0)
      }}>
      <label htmlFor='quantity'>Quantity:</label>
      <div>
        <button type='button' onClick={handleDecrease}>-</button>
          <input
            type='text'
            id='quantity'
            name='quantity'
            min='1'
            max='10'
            pattern='^\d+$'
            value={value}
            onChange={handleChange}
          />
        <button type='button' onClick={handleIncrease}>+</button>
      </div>
      <button type='submit'>Add to Cart</button>
    </form>
  </>
  )
}

export default ItemForm
