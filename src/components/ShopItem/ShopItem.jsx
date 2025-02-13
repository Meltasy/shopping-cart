import { useState } from 'react'
import DetailItem from '../DetailItem/DetailItem'
import ItemForm from '../ItemForm/ItemForm'

const ShopItem = ({ itemId, imageUrl, title, price, description, handleAdd }) => {
  const [showDetail, setShowDetail] = useState(false)

  return (
    <div key={itemId} className='item'>
      <img src={imageUrl} alt=' ' />
      <h3>{title} €{price ? price.toFixed(2) : '0.00'}</h3>
      <button onClick={() => setShowDetail(true)}>Show Detail</button>
      <DetailItem
        showDetail={showDetail}
        itemId={itemId}
        title={title}
        price={price}
        imageUrl={imageUrl}
        description={description}
      >
        <button onClick={() => setShowDetail(false)}>Back to Shop</button>
      </DetailItem>
      <ItemForm
        itemId={itemId} price={price} onSubmit={handleAdd} />
    </div>
  )
}

export default ShopItem
