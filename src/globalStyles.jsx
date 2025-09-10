import { createGlobalStyle } from 'styled-components'
import meriendaBoldWoff from './assets/merienda-bold-webfont.woff'
import meriendaBoldWoff2 from './assets/merienda-bold-webfont.woff2'
import meriendaRegularWoff from './assets/merienda-regular-webfont.woff'
import meriendaRegularWoff2 from './assets/merienda-regular-webfont.woff2'

const GlobalStyle = createGlobalStyle`
  @font-face {
    font-family: 'merienda-bold';
    src:
      url(${meriendaBoldWoff2}) format('woff2'),
      url(${meriendaBoldWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'merienda-regular';
    src:
      url(${meriendaRegularWoff2}) format('woff2'),
      url(${meriendaRegularWoff}) format('woff');
    font-weight: normal;
    font-style: normal;
  }
  
  :root {
    --text-color: rgb(16, 16, 16);
    --background-color: rgb(245, 245, 245);
    --primary-color: rgb(88, 42, 114);
    --primary-color-light: rgb(145, 109, 165);
    --primary-color-dark: rgb(42, 5, 62);
    --secondary-color: rgb(192, 192, 192);
    --secondary-color-light: rgb(232, 232, 232);
    --secondary-color-dark: rgb(80, 80, 80);
  }
  
  body {
    font-family: 'merienda-regular', Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 16px;
    color: var(--text-color);
    background-color: var(--background-color);
  }

  h1 {
    font-family: 'merienda-bold', Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    font-size: 5rem;
    color: var(--primary-color);
    text-shadow: 2px 2px 2px var(--primary-color-light);
    text-align: center;
    margin-bottom: 0;
    @media (max-width: 480px) {
      font-size: 2.5rem;
    }
  }
  
  h2, h3, h4 {
    font-family: 'merienda-regular', Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
    margin: 0 0.6rem;
  }
`

export default GlobalStyle
