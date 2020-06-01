import * as React from 'react'
import styled from 'styled-components'

export const TableWrapper: React.FC = (props) => {
  return <StyledTable>{props.children}</StyledTable>
}

const StyledTable = styled.table`
  border-collapse: collapse;
  margin: auto;
`
