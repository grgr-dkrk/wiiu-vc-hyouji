import * as React from 'react'
import styled from 'styled-components'
import { SortDirection } from '../../types/Form'

type Props = {
  label: string
  isCurrent: boolean
  direction: SortDirection
  handleClick: () => void
}

export const SortButton: React.FC<Props> = (props) => {
  return (
    <>
      <StyledButton
        aria-pressed={props.isCurrent}
        aria-label={props.label}
        isCurrent={props.isCurrent}
        onClick={props.handleClick}
      />
      <StyledIconWrapper
        isCurrent={props.isCurrent}
        direction={props.direction}
        role="presentation"
        onClick={props.handleClick}
      >
        <StyledIcon role="presentation" />
        <StyledIcon role="presentation" />
      </StyledIconWrapper>
    </>
  )
}

const StyledButton = styled.button<Pick<Props, 'isCurrent'>>`
  position: absolute;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
`

const StyledIconWrapper = styled.span<Pick<Props, 'isCurrent' | 'direction'>>`
  display: inline-block;
  position: relative;
  width: 12px;
  height: 24px;
  vertical-align: middle;
  margin-left: 4px;
  cursor: pointer;
  span {
    position: absolute;
    left: 0;
    width: 0;
    height: 0;
  border-style: solid;
  ${(props) => props.isCurrent && 'vertical-align: middle;'}
  border-width: ${(props) =>
    !props.isCurrent
      ? '0 6px 4px 6px;'
      : props.direction === 'desc'
      ? '0 6px 8px 6px;'
      : '8px 6px 0 6px;'}
  border-color: ${(props) =>
    !props.isCurrent
      ? 'transparent transparent #fff transparent;'
      : props.direction === 'desc'
      ? 'transparent transparent #fff transparent;'
      : '#ffffff transparent transparent transparent'};
    &:first-of-type {
      top: 6px;
    }
    &:last-of-type {
      transform: rotateX(180deg);
      bottom: 8px;
      ${(props) => props.isCurrent && 'display: none;'}
    }
  }
`

const StyledIcon = styled.span``
