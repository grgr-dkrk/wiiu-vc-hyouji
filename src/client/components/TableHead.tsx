import * as React from 'react'
import styled from 'styled-components'
import { SortButton } from './SortButton'
import { SortTypes, SortDirection } from '../../types/Form'

type Props = {
  sortType: SortTypes
  sortDirection: SortDirection
  handleSortTitle: () => void
  handleSortPlatform: () => void
  handleSortPublisher: () => void
}

export const TableHead: React.FC<Props> = (props) => {
  return (
    <StyledThead>
      <StyledTr>
        <StyledTh>
          タイトル
          <SortButton
            label="タイトル順にソート"
            isCurrent={props.sortType === 'title'}
            direction={props.sortDirection}
            handleClick={props.handleSortTitle}
          />
        </StyledTh>
        <StyledTh>
          機種
          <SortButton
            label="機種の順にソート"
            isCurrent={props.sortType === 'platform'}
            direction={props.sortDirection}
            handleClick={props.handleSortPlatform}
          />
        </StyledTh>
        <StyledTh>
          メーカー
          <SortButton
            label="機種の順にソート"
            isCurrent={props.sortType === 'publisher'}
            direction={props.sortDirection}
            handleClick={props.handleSortPublisher}
          />
        </StyledTh>
      </StyledTr>
    </StyledThead>
  )
}

const StyledThead = styled.thead`
  position: sticky;
`

const StyledTr = styled.tr`
  background-color: #333;
  color: #fff;
`

const StyledTh = styled.th`
  border: 1px solid #bbb;
  position: relative;
  padding: 0.4em;
`
