import * as React from 'react'
import styled from 'styled-components'
import { Button } from './Button'

type Props = {
  handleInitOwnList: () => void
}

export const SelectOtherOptions: React.FC<Props> = (props) => {
  return (
    <StyledContainer>
      <Button
        label="所有チェックを初期化"
        handleClick={props.handleInitOwnList}
      />
    </StyledContainer>
  )
}

const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 24px;
`
