import * as React from 'react'
import { Header } from '../containers/Header'
import { Footer } from '../containers/Footer'
import styled from 'styled-components'

export const MainLayout: React.FC = (props) => {
  return (
    <>
      <Header />
      <StyledMain>{props.children}</StyledMain>
      <Footer />
    </>
  )
}

const StyledMain = styled.main`
  display: block;
  margin: auto;
  max-width: 1024px;
`
