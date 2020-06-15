import * as React from 'react'
import styled from 'styled-components'
import { Result } from './Result'
import { BREAK_POINT } from '../styles/valiables'

type Props = {
  gameListLength: number
  ownListLength: number
}

export const ResultWrapper: React.FC<Props> = (props) => {
  return (
    <StyledWrapper>
      <Result count={props.gameListLength} />
      <Result count={props.ownListLength} label={'所有'} />
    </StyledWrapper>
  )
}

const StyledWrapper = styled.div`
  display: flex;
  width: 180px;
  margin: 0 auto 24px;
  justify-content: space-between;
  ${BREAK_POINT.MID} {
    flex-direction: column;
    margin-bottom: 16px;
  }
`
