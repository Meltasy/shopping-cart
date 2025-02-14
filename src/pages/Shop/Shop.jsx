import ShopItem from '../../components/ShopItem/ShopItem'

const Shop = ({ productItems, handleAdd }) => {

  return (
    <div>
      <h1>Products</h1>
      <div className='productItems'>
        {productItems.map(item => (
          <ShopItem
            key={item.id}
            itemId={item.id}
            imageUrl={item.image}
            title={item.title}
            price={item.price}
            description={item.description}
            handleAdd={handleAdd}
          />
        ))}
      </div>
    </div>
  )
}

export default Shop
