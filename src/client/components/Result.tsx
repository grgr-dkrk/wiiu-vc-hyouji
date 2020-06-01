import * as React from 'react'
import styled from 'styled-components'

type Props = {
  count: number
}

export const Result: React.FC<Props> = (props) => {
  return (
    <StyledResultMessage aria-live="polite" aria-atomic="true">
      計: {props.count}本
    </StyledResultMessage>
  )
}

const StyledResultMessage = styled.p`
  text-align: center;
  margin-bottom: 24px;
`
