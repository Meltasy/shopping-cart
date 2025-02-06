import ItemCard from './ItemCard'

const Products = ({ productItems, handleSubmit }) => {

  return (
    <div>
      <h1>Atelier</h1>
      <div className='productItems'>
        {productItems.map(item => (
          <ItemCard
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

export default Products
