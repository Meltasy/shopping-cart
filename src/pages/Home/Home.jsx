import { useState, useEffect } from 'react'
import styled from 'styled-components'

const Blurb = styled.p`
  font-size: 1.5rem;
  color: var(--primary-color);
  font-weight: 700;
  text-align: right;
  padding-right: 5rem;
  margin-bottom: 0;
`

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  gap: 20px;
  background-color: white;
  border-top: 20px solid var(--primary-color);
  border-bottom: 20px solid var(--primary-color);
  transform: skewY(10deg);
`

const StyledImage = styled.img`
  display: ${props => (props.$hidden ? 'none' : 'block' )};
  max-width: 500px;
  max-height: 500px;
  object-fit: contain;
  border-radius: 10px;
  padding: 20px;
`

const Home = ({ productItems }) => {
  const [currentImages, setCurrentImages] = useState([0, 1, 2])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages(prevImages =>
        prevImages.map(image =>
          image === productItems.length - 1 ? 0 : image + 1
      ))
    }, 5000)
    return () => clearInterval(interval)
  }, [currentImages, productItems])

  return (
    <>
      <h1>Galeries Libellule</h1>
      <Blurb>See something you like?<br />
      Check it out in our shop!</Blurb>
      <Wrapper>
        {currentImages.map(index => {
          const item = productItems[index]
          return (
            item && (
              <StyledImage
                key={item.id}
                src={item.image}
                alt={item.title}
                $hidden={false}
              />
            )
          )
        })}
      </Wrapper>
    </>
  )
}

export default Home
