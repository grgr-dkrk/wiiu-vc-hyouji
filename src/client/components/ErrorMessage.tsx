import * as React from 'react'
import styled from 'styled-components'

type Props = {
  message: string
}

export const ErrorMessage: React.FC<Props> = (props) => (
  <StyledErrorMessage role="alert" aria-atomic="true">
    {props.message}
  </StyledErrorMessage>
)

const StyledErrorMessage = styled.p`
  text-align: center;
`
