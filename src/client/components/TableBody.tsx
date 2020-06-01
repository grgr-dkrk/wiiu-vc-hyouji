import * as React from 'react'
import { GameList } from '../../types/Game'
import styled from 'styled-components'

type Props = { gameList: GameList }

export const TableBody: React.FC<Props> = (props) => {
  return (
    <tbody>
      {props.gameList.map((game) => (
        <StyledTr key={game.id}>
          <StyledTd>{game.title}</StyledTd>
          <StyledTd>{game.platform}</StyledTd>
          <StyledTd>{game.publisher}</StyledTd>
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

const StyledTd = styled.td`
  border: 1px solid #bbb;
  padding: 0.4em;
  max-width: 440px;
`
