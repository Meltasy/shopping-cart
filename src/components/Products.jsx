import { useState } from 'react'
import DetailItem from './DetailItem'
import BuyItems from './BuyItems'

const Products = ({ productItems }) => {
  const [itemDetail, setItemDetail] = useState([])
  const [showDetail, setShowDetail] = useState(false)
  const [numAllItems, setNumAllItems] = useState([])
//   const [addToCart, setAddToCart] = useState([])

  function handleItemDetail(id) {
    let item = productItems.filter(pI => pI.id === id)
    setItemDetail({
      id: item[0].id,
      title: item[0].title,
      price: item[0].price,
      image: item[0].image,
      description: item[0].description,
    })
    setShowDetail(true)
  }

  function handleNumAllItems(itemId, number) {
    if (numAllItems.some(item => item.id === itemId)) {
      setNumAllItems(numAllItems.map(item => {
        if (item.id === itemId) { return { ...item, quantity: number }}
        else { return item }
      }))
    } else {
      setNumAllItems([ ...numAllItems, { id: itemId, quantity: number } ])
    }
    console.log('numAllItems:', numAllItems)
  }

  return (
    <div>
      <h1>Atelier</h1>
      <div className='productItems'>
        {productItems.map(item => (
          <div key={item.id} className='item'>
            <h2>{item.title} €{item.price}</h2>
            <img src={item.image} alt=' ' />
            <button onClick={() => handleItemDetail(item.id)}>Show Detail</button>
            <BuyItems itemId={item.id} handleNumAllItems={handleNumAllItems}/>
            <DetailItem showDetail={showDetail} itemDetail={itemDetail}>
              <button onClick={() => { setShowDetail(false), setItemDetail([]) }}>Back to shop</button>
            </DetailItem>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Products
