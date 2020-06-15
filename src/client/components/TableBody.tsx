import * as React from 'react'
import { GameList, Game } from '../../types/Game'
import { OwnList } from '../../types/OwnList'
import styled from 'styled-components'
import { CheckBox } from './CheckBox'
import { isExistOwnId } from '../../domain/OwnList'

type Props = {
  gameList: GameList
  ownList: OwnList
  handleChecked: (checked: boolean, id: Game['id']) => void
}

export const TableBody: React.FC<Props> = (props) => {
  return (
    <tbody>
      {props.gameList.map((game) => (
        <StyledTr key={game.id}>
          <StyledTd>{game.title}</StyledTd>
          <StyledTd>{game.platform}</StyledTd>
          <StyledTd>{game.publisher}</StyledTd>
          <StyledTd center>
            <CheckBox
              gameId={game.id}
              title={game.title}
              isChecked={isExistOwnId(props.ownList, game.id)}
              handleChecked={props.handleChecked}
            />
          </StyledTd>
        </StyledTr>
      ))}
    </tbody>
  )
}

const StyledTr = styled.tr`
  &:nth-of-type(even) {
    background-color: #eee;
  }
`

const StyledTd = styled.td<{ center?: boolean }>`
  border: 1px solid #bbb;
  padding: 0.4em;
  position: relative;
  max-width: 440px;
  ${(props) => props.center && `text-align: center;`}
`
