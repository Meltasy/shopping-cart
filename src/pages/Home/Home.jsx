import { useState, useEffect } from 'react'
import styled, { keyframes } from 'styled-components'
import Dragonfly from '../../components/Dragonfly'

const flyIn = keyframes`
  0% {
    transform: translateX(-1200%) translateY(-100%) rotate(120deg);
    opacity: 0;
  }
  5% {
    transform: translateX(-950%) translateY(0%) rotate(110deg);
    opacity: 0.15;
  }
  10% {
    transform: translateX(-700%) translateY(50%) rotate(100deg);
    opacity: 0.25;
  }
  15% {
    transform: translateX(-450%) translateY(80%) rotate(90deg);
    opacity: 0.35;
  }
  20% {
    transform: translateX(-300%) translateY(90%) rotate(80deg);
    opacity: 0.5;
  }
  25% {
    transform: translateX(-150%) translateY(80%) rotate(65deg);
    opacity: 0.6;
  }
  30% {
    transform: translateX(0%) translateY(50%) rotate(50deg);
    opacity: 0.75;
  }
  35% {
    transform: translateX(40%) translateY(25%) rotate(35deg);
    opacity: 0.85;
  }
  40% {
    transform: rotate(-30deg) translateX(80%) rotate(20deg);
    opacity: 1;
  }
  45% {
    transform: rotate(-60deg) translateX(120%) rotate(10deg);
    opacity: 1;
  }
  50% {
    transform: rotate(-90deg) translateX(160%) rotate(0deg);
    opacity: 1;
  }
  55% {
    transform: rotate(-135deg) translateX(200%) rotate(-10deg);
    opacity: 1;
  }
  60% {
    transform: rotate(-180deg) translateX(240%) rotate(-20deg);
    opacity: 1;
  }
  65% {
    transform: rotate(-225deg) translateX(200%) rotate(-30deg);
    opacity: 1;
  }
  70% {
    transform: rotate(-270deg) translateX(160%) rotate(-40deg);
    opacity: 1;
  }
  75% {
    transform: rotate(-300deg) translateX(120%) rotate(-50deg);
    opacity: 1;
  }
  80% {
    transform: rotate(-330deg) translateX(80%) rotate(-60deg);
    opacity: 1;
  }
  85% {
    transform: rotate(-340deg) translateX(60%) rotate(-70deg);
    opacity: 1;
  }
  90% {
    transform: translateX(40%) translateY(10%) rotate(-75deg);
    opacity: 1;
  }
  95% {
    transform: translateX(20%) translateY(5%) rotate(-80deg);
    opacity: 1;
  }
  100% {
    transform: translateX(0%) translateY(0%) rotate(-90deg);
    opacity: 1;
  }
`

const CirclePath = styled.div`
  display: inline-block;
  animation: ${flyIn} 10s linear forwards;
`

const DragonFlyWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
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
    width: min(95vw, 250px);
    height: min(95vw, 250px);
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
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImages(prevImages =>
        prevImages.map(image =>
          image === productItems.length - 1 ? 0 : image + 1
      ))
    }, 3000)
    return () => clearInterval(interval)
  }, [productItems.length])

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 480)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <>
      <h1>Galeries Libellule</h1>
      <DragonFlyWrapper>
        <CirclePath>
          <Dragonfly size={isMobile ? 45 : 75}/>
        </CirclePath>
      </DragonFlyWrapper>
      <Wrapper>
        {[0, 1, 2].map(wrapperIndex => (
          <ImageWrapper key={wrapperIndex}>
            {productItems.map((item, itemIndex) => (
              <StyledImage
                key={item.id}
                src={item.image}
                alt={item.title}
                data-testid='product-image'
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
