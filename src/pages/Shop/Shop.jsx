import ShopItem from '../../components/ShopItem/ShopItem'

const Shop = ({ productItems, handleAdd }) => {

  return (
    <div>
      <div className='productItems'>
        {productItems.map(item => (
          <ShopItem
            key={item.id}
            itemId={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.image}
            description={item.description}
            handleAdd={handleAdd}
          />
        ))}
      </div>
    </div>
  )
}

export default Shop
