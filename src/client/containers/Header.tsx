import * as React from 'react'
import { SITE_INFO } from '../../constants'
import styled from 'styled-components'
import { BREAK_POINT } from '../styles/valiables'

export const Header = () => (
  <StyledHeader role="banner">
    <h1>{SITE_INFO.TITLE}</h1>
    <a
      rel="noopener noreferrer"
      target="_blank"
      href="https://ja.wikipedia.org/wiki/Wii_U%E7%89%88%E3%83%90%E3%83%BC%E3%83%81%E3%83%A3%E3%83%AB%E3%82%B3%E3%83%B3%E3%82%BD%E3%83%BC%E3%83%AB%E3%81%AE%E3%82%B2%E3%83%BC%E3%83%A0%E3%82%BF%E3%82%A4%E3%83%88%E3%83%AB%E4%B8%80%E8%A6%A7"
    >
      出典: Wii U版バーチャルコンソールのゲームタイトル一覧 - Wikipedia
    </a>
  </StyledHeader>
)

const StyledHeader = styled.header`
  padding: 24px 0;
  text-align: center;
  h1 {
    font-size: 2.4rem;
    ${BREAK_POINT.MID} {
      font-size: 2rem;
    }
  }
  ${BREAK_POINT.MID} {
    width: 95%;
    margin: auto;
  }
`
