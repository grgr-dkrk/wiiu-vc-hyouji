import * as React from 'react'
import styled from 'styled-components'

type Props = {
  label: string
  handleClick: () => void
}

export const Button: React.FC<Props> = (props) => {
  return <StyledButton onClick={props.handleClick}>{props.label}</StyledButton>
}

const StyledButton = styled.button`
  border: solid 1px #ccc;
  padding: 8px;
`
