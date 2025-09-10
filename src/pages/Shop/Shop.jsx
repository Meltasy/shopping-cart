import ShopItem from '../../components/ShopItem/ShopItem'
import styled from 'styled-components'

const Wrapper = styled.div`
  padding: 0.5rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: center;
  @media (max-width: 480px) {
    gap: 0.5rem;
    padding: 0.25rem;
  }
`

const Shop = ({ productItems, handleAdd }) => {

  return (
    <>
      <h1>Products</h1>
      <Wrapper>
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
      </Wrapper>
    </>
  )
}

export default Shop
