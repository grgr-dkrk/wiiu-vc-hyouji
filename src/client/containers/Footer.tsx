import * as React from 'react'
import { SITE_INFO } from '../../constants'
import styled from 'styled-components'

export const Footer = () => <StyledFooter>{SITE_INFO.COPYRIGHT}</StyledFooter>

const StyledFooter = styled.footer`
  padding: 24px 0;
  text-align: center;
`
