import * as React from 'react'
import { Game } from '../../types/Game'
import styled from 'styled-components'

type Props = {
  gameId: Game['id']
  title: Game['title']
  isChecked: boolean
  handleChecked: (checked: boolean, id: Game['id']) => void
}

export const CheckBox: React.FC<Props> = (props) => {
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    props.handleChecked(e.currentTarget.checked, props.gameId)
  }

  return (
    <>
      <StyledCheckBoxLabel htmlFor={props.gameId}>
        {props.title}を持ってい{props.isChecked ? 'る' : 'ない'}
      </StyledCheckBoxLabel>
      <input
        type="checkbox"
        id={props.gameId}
        onChange={onChange}
        checked={props.isChecked}
      />
    </>
  )
}

const StyledCheckBoxLabel = styled.label`
  display: inline-block;
  position: absolute;
  opacity: 0;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`
