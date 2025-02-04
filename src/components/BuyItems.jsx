import { useState } from 'react'

const BuyItems = ({ itemId, handleNumAllItems }) => {
  const [inputNum, setInputNum] = useState(0)
  const [numItems, setNumItems] = useState({
    id: '',
    quantity: '',
  })

  function handleInputNum(e) {
    let number = inputNum
    if (e.target.value === '+1') {
      if (number < 10) {
        setInputNum(Number(inputNum + 1))
        number = number + 1
      } else { return }
    } else if (e.target.value === '-1') {
      if (number > 0) {
        setInputNum(Number(inputNum - 1))
        number = number - 1
      } else { return }
    } else {
      setInputNum(Number(e.target.value))
      number = Number(e.target.value)
    }
    handleBuyItems(number)
  }

  function handleBuyItems(number) {
    handleNumAllItems(itemId, number)
    setNumItems({ ...numItems, id: itemId, quantity: number })
    console.log('numItems:', numItems)
  }

  return (
    <div>
      <label htmlFor='quantity'>How many?</label>
      <input
        type='number'
        id='quantity'
        name='quantity'
        min='1'
        max='10'
        value={inputNum}
        // value={inputNum === 0 ? '' : inputNum}
        onChange={(e) => handleInputNum(e)}
      />
      <button value='+1' onClick={(e) => handleInputNum(e)}>+</button>
      <button value='-1' onClick={(e) => handleInputNum(e)}>-</button>
      {/* <button>Add to Cart</button> */}
    </div>
  )
}

export default BuyItems
