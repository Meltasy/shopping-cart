import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.section`
  font-weight: bold;
  color: var(--background-color);
  background-color: var(--primary-color);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: fixed;
  top: 0;
  width: 100%;
  height: 100px;
`

const StyledList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 50px;
`

const StyledLink = styled(NavLink)`
  font-size: 2rem;
  text-decoration: none;
  color: var(--background-color);
  padding: 2.5rem;
  &.active {
    color: var(--primary-color);
    background-color: var(--background-color);
    padding: 25px;
  }
`

const StyledButton = styled.button`
  color: var(--primary-color);
  background-color: var(--background-color);
  border: none;
`
const QuantityCart = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
  color: var(--background-color);
  background-color: var(--primary-color);
  padding: 10px;
  max-width: 30px;
  border-radius: 30px;
`

const Navbar = ({ quantityCart }) => {

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
      <StyledLink to='../cart'>
        <StyledButton>
          <QuantityCart>{quantityCart}</QuantityCart>
        </StyledButton>
      </StyledLink>
    </Wrapper>
  )
}

export default Navbar
