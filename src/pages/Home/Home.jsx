import { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import DragonFly from '../../components/Dragonfly'

const blurb = keyframes`
  0% {
    transform: translateX(50%)
  }
  75% {
    transform: translateX(-20%)
  }
  100% {
    transform: translateX(0%)
  }
`

const Blurb = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--primary-color);
  text-align: center;
  margin-bottom: 0;
  animation: ${blurb} 3000ms;
  animation-timing-function: ease-in-out;
  @media (max-width: 480px) {
    font-size: 1rem;
  }
`

const Wrapper = styled.div`
  background-color: var(--secondary-color-light);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  gap: 1rem;
  @media (max-width: 480px) {
    flex-direction: column;
    justify-content: center;
    align-items: space-around;
  }
`

const ImageWrapper = styled.div`
  position: relative;
  width: 500px;
  height: 500px;
  @media (max-width: 480px) {
    width: min(90vw, 250px);
    height: min(90vw, 250px);
  }
`

const StyledImage = styled.img`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  opacity: ${props => (props.$isVisible ? 1 : 0 )};
  object-fit: contain;
  border-radius: 10px;
  padding: 1rem;
  box-sizing: border-box;
  transition: opacity 1s ease-in-out;
`

const Home = ({ productItems }) => {
  const [currentImages, setCurrentImages] = useState([0, 1, 2])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages(prevImages =>
        prevImages.map(image =>
          image === productItems.length - 1 ? 0 : image + 1
      ))
    }, 3000)
    return () => clearInterval(interval)
  }, [productItems.length])

  return (
    <>
      <h1>Galeries Libellule</h1>
      <DragonFly />
      <Blurb>See something you like?<br />
      Check it out in our shop!</Blurb>
      <Wrapper>
        {[0, 1, 2].map(wrapperIndex => (
          <ImageWrapper key={wrapperIndex}>
            {productItems.map((item, itemIndex) => (
              <StyledImage
                key={item.id}
                src={item.image}
                alt={item.title}
                $isVisible={itemIndex === currentImages[wrapperIndex]}
              />
            ))}
          </ImageWrapper>
        ))}
      </Wrapper>
    </>
  )
}

export default Home
