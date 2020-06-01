import * as React from 'react'
import { Header } from '../containers/Header'
import styled from 'styled-components'
import { BREAK_POINT } from '../styles/valiables'

export const MainLayout: React.FC = (props) => {
  return (
    <>
      <Header />
      <StyledMain>{props.children}</StyledMain>
    </>
  )
}

const StyledMain = styled.main`
  display: block;
  margin: auto;
  max-width: 1024px;
  padding-bottom: 24px;
  ${BREAK_POINT.MID} {
    width: 95%;
  }
`
