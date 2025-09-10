import styled from 'styled-components'

const Wrapper = styled.footer`
  color: var(--background-color);
  background-color: var(--primary-color);
  width: 100%;
  margin-top: auto;
  padding: 0 1rem;
  display: flex;
  justify-content: center;
  align-items: center;
  & p {
    margin: 1rem;
  }
  @media (max-width: 480px) {
    flex-direction: column;
    & p {
      margin: 0.5rem;
    }
  }
`

const Footer = () => {

  return (
    <Wrapper>
      <p>Copyright &copy; 2025 Melissa Vialaneix.</p>
      <p>All rights reserved.</p>
    </Wrapper>
  )
}

export default Footer