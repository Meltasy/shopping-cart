import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  :root {
    --text-color: #07000A;
    --background-color: #ECE5F0;
    --primary-color: #582A72;
    --primary-color-light: #916DA5;
    --primary-color-dark: #2A053E;
  }
  
  body {
    font-family: 'Courier New', Courier, monospace;
    font-size: 16px;
    color: var(--text-color);
    background-color: var(--background-color);
  }

  h1 {
    font-size: 5rem;
    color: var(--primary-color);
    text-shadow: 2px 2px 2px var(--primary-color-light);
    text-align: center;
    margin-bottom: 0;
  }
`

export default GlobalStyle
