import * as React from 'react'
import styled from 'styled-components'

type Props = {
  count: number
  label?: string
  unit?: string
}

export const Result: React.FC<Props> = (props) => {
  return (
    <StyledResultMessage aria-live="polite" aria-atomic="true">
      {props.label || '計'}: {props.count}
      {props.unit || '本'}
    </StyledResultMessage>
  )
}

const StyledResultMessage = styled.p`
  text-align: center;
`
