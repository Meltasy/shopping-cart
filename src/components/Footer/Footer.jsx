import styled from 'styled-components'

const Wrapper = styled.footer`
  font-weight: bold;
  color: var(--background-color);
  background-color: var(--primary-color);
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: auto;
  width: 100%;
`

const Footer = () => {

  return (
    <Wrapper>
      <p>Copyright &copy; 2025 Melissa Vialaneix. All rights reserved.</p>
    </Wrapper>
  )
}

export default Footer