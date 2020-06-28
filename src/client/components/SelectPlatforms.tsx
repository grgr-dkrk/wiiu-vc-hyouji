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
    <StyledWrapper>
      {props.keys.map((key) => (
        <StyledButtonWrapper key={key}>
          <StyledButton
            isActive={props.choices.includes(key)}
            onClick={() => props.handleSelect(key)}
          >
            {key}
          </StyledButton>
        </StyledButtonWrapper>
      ))}
    </StyledWrapper>
  )
}

const StyledWrapper = styled.menu`
  display: block;
  text-align: center;
  margin-bottom: 16px;
  list-style-type: none;
  ${BREAK_POINT.MID} {
    margin-left: -8px;
    margin-top: -8px;
    span {
      display: block;
    }
  }
`

const StyledButtonWrapper = styled.li`
  display: inline-block;
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
