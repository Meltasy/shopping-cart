import ShopItem from '../../components/ShopItem/ShopItem'
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  padding: 10px;
  justify-content: center;
`

const Shop = ({ productItems, handleAdd }) => {

  return (
    <div>
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
    </div>
  )
}

export default Shop
