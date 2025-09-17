import { useState, useMemo } from 'react'
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

const FilterWrapper = styled.div`
  font-size: 1.2rem;
  margin: 0.5rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  @media (max-width: 480px) {
    flex-direction: column;
  }
`

const Select = styled.select`
  font-size: 1.2rem;
  background-color: var(--secondary-color-light);
  padding: 0.5rem 1rem;
  outline: none;
  border: none;
  border-radius: 5px;
`

const Shop = ({ productItems, handleAdd }) => {
  const [selectedCategory, setSelectedCategory] = useState('all')

  const categories = useMemo(() => {
    if (!productItems) return []
    const unique = [...new Set(productItems.map(item => item.category))]
    return ['all', ...unique]
  }, [productItems])

  const filteredItems = productItems.filter(item =>
    selectedCategory === 'all' ? true : item.category === selectedCategory
  )

  return (
    <>
      <h1>Products</h1>
      <FilterWrapper>
        <label htmlFor='category'>Choose a category:</label>
        <Select
          id='category'
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
        >
          {categories.map(cat => (
            <option key={cat} value={cat}>
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </option>
          ))}
        </Select>
      </FilterWrapper>
      <Wrapper>
        {filteredItems.map(item => (
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
      {filteredItems.length === 0 && <h3>No products found.</h3>}
    </>
  )
}

export default Shop
