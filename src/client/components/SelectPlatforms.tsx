import * as React from 'react'
import styled from 'styled-components'
import { BREAK_POINT } from '../styles/valiables'

type Props = {
  label: string
  keys: string[]
  choices: string[]
  handleSelect: (choice: string) => void
}

export const SelectPlatforms: React.FC<Props> = (props) => {
  return (
    <StyledLabel>
      <StyledLabelText>{props.label}</StyledLabelText>
      <StyledButtonWrapper>
        {props.keys.map((key) => (
          <StyledButton
            key={key}
            isActive={props.choices.includes(key)}
            onClick={() => props.handleSelect(key)}
          >
            {key}
          </StyledButton>
        ))}
      </StyledButtonWrapper>
    </StyledLabel>
  )
}

const StyledLabel = styled.label`
  display: block;
  text-align: center;
  margin-bottom: 24px;
  ${BREAK_POINT.MID} {
    span {
      display: block;
    }
    margin-left: -8px;
  }
`

const StyledLabelText = styled.span`
  ${BREAK_POINT.MID} {
    display: block;
    margin-bottom: 8px;
  }
`

const StyledButtonWrapper = styled.span`
  ${BREAK_POINT.MID} {
    margin-left: -8px;
    margin-top: -8px;
  }
`

const StyledButton = styled.button<{ isActive?: boolean }>`
  border-radius: 16px;
  border: 1px solid #ccc;
  ${(props) => props.isActive && `background-color: #ccc;`}
  padding: 8px 16px;
  text-align: center;
  font-size: 1.5rem;
  margin-left: 8px;
  ${BREAK_POINT.MID} {
    margin-top: 8px;
  }
`
