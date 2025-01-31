import { useEffect, useState } from "react";

const ProductItems = () => {
  const [productItems, setProductItems] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://fakestoreapi.com/products', { mode: 'cors' })
    .then((response) => {
      if (response.status >= 400) {
        throw new Error('Server error')
      }
      return response.json()
    })
    .then((response) => setProductItems(response))
    .catch((error) => setError(error))
    .finally(() => setLoading(false))
  }, [])

  if (loading) return <p>Loading...</p>
  if (error) return <p>Network error</p>

  return (
    // productItems && (
      <>
        <div className='productItems'>
          {productItems.map(item => (
            <div key={item.id} className='item'>
              <h2>{item.title} €{item.price}</h2>
              <img src={item.image} alt=' ' />
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </>
    )
  // )
}

export default ProductItems
