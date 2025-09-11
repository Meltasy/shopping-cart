import { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import Icon from '@mdi/react'
import { mdiBasketOutline } from '@mdi/js'

const Wrapper = styled.nav`
  font-family: 'merienda-bold', Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
  font-weight: bold;
  color: var(--background-color);
  background-color: var(--primary-color);
  width: 100%;
  height: 5rem;
  position: fixed;
  top: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  overflow: hidden;
  @media (max-width: 480px) {
    height: 3.5rem;
  }
`

const StyledList = styled.ul`
  width: 30%;
  list-style-type: none;
  padding: 0;
  margin: 0 1rem;
  display: flex;
  justify-content: space-between;
  gap: 1rem;
  @media (max-width: 480px) {
    width: 50%;
  }
`

const linkStyles = `
  font-size: 2rem;
  text-decoration: none;
  color: var(--background-color);
  &:hover {
    color: var(--primary-color-dark);
  }
  &.active {
    color: var(--primary-color-light);
  }
  @media (max-width: 480px) {
    font-size: 1.2rem;
  }
`

const StyledLink = styled(NavLink)`
  ${linkStyles}
`

const StyledCartLink = styled(NavLink)`
  ${linkStyles}
  position: relative;
  margin: 0 2rem;
`

const QuantityCart = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--background-color);
  max-width: 30px;
  min-width: 20px;
  height: 20px;
  border: var(--primary-color);
  border-radius: 50%;
  position: absolute;
  bottom: 0;
  right: 0;
  transform: translate(50%, -30%);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  @media (max-width: 480px) {
    font-size: 0.8rem;
    max-width: 20px;
    min-width: 16px;
    height: 16px;
    transform: translate(40%, -20%);
  }
`

const Navbar = ({ quantityCart }) => {
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 480)
    }
    checkScreenSize()
    window.addEventListener('resize', checkScreenSize)
    return () => window.removeEventListener('resize', checkScreenSize)
  }, [])

  return (
    <Wrapper>
      <StyledList>
        <li>
          <StyledLink to='../home'>Galeries Libellule</StyledLink>
        </li>
        <li>
          <StyledLink to='../shop'>Shop</StyledLink>
        </li>
      </StyledList>
      <StyledCartLink to='../cart'>
        <Icon path={mdiBasketOutline} size={isMobile ? 1.5 : 3} />
        <QuantityCart>{quantityCart}</QuantityCart>
      </StyledCartLink>
    </Wrapper>
  )
}

export default Navbar
