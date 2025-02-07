import ShopItem from '../components/ShopItem'

const Shop = ({ productItems, handleSubmit }) => {

  return (
    <div>
      <h1>Atelier</h1>
      <div className='productItems'>
        {productItems.map(item => (
          <ShopItem
            key={item.id}
            itemId={item.id}
            title={item.title}
            price={item.price}
            imageUrl={item.image}
            description={item.description}
            onSubmit={handleSubmit}
          />
        ))}
      </div>
    </div>
  )
}

export default Shop
