import { createGlobalStyle } from 'styled-components'
import { BREAK_POINT } from './valiables'

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html {
    font-size:62.5%;
  }
  body {
    font-family: 'Noto Sans JP', '游ゴシック Medium', YuGothic, YuGothicM,
      'Hiragino Kaku Gothic ProN', 'Hiragino Kaku Gothic Pro', メイリオ, Meiryo,
      sans-serif;
    line-height: 1.4;
    font-size: 1.6rem;
  }
  ul,
  ol {
    list-style-type: none;
  }
  font-family: sans-serif;
  html,
  body,
  #app,
  .wrapper {
    height: 100%;
    width: 100%;
  }
  a {
    text-decoration: none;
  }
  p {
    font-size: 1.8rem;
    line-height: 1.5;
    ${BREAK_POINT.MID} {
      font-size: 1.6rem;
    }
  }
  main {
    display: block;
  }
  button {
    background-color: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    appearance: none;
  }
  img {
    max-width: 100%;
    height: auto;
  }
`
