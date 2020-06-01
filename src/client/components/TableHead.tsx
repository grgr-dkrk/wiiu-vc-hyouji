import * as React from 'react'
import styled from 'styled-components'

type Props = { headings: string[] }

export const TableHead: React.FC<Props> = (props) => {
  return (
    <StyledThead>
      <StyledTr>
        {props.headings.map((heading) => (
          <StyledTh key={heading}>{heading}</StyledTh>
        ))}
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
  padding: 0.4em;
`
