import * as React from 'react'
import styled from 'styled-components'

type Props = {
  label: string
  keys: string[]
  choices: string[]
  handleSelect: (choice: string) => void
}

export const Select: React.FC<Props> = (props) => {
  return (
    <StyledLabel>
      {props.label}
      {props.keys.map((key) => (
        <StyledButton
          key={key}
          isActive={props.choices.includes(key)}
          onClick={() => props.handleSelect(key)}
        >
          {key}
        </StyledButton>
      ))}
    </StyledLabel>
  )
}

const StyledLabel = styled.label``

const StyledButton = styled.button<{ isActive?: boolean }>`
  border-radius: 25%;
  border: 1px solid #ccc;
  ${(props) => props.isActive && `background-color: #ccc;`}
  padding: 8px 4px;
  text-align: center;
`
