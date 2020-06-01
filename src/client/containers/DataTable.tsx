import * as React from 'react'
import { TableWrapper } from '../components/TableWrapper'
import { TableHead } from '../components/TableHead'
import {
  getGameMasterData,
  getPlatformKeys,
  getFilterdGameList,
} from '../../domain/Game'
import { TableBody } from '../components/TableBody'
import { SelectPlatforms } from '../components/SelectPlatforms'
import { ErrorMessage } from '../components/ErrorMessage'
import { SortTypes, SortDirection } from '../../types/Form'
import { Result } from '../components/Result'

type SortState = {
  type: SortTypes
  direction: SortDirection
}

export const DataTable: React.FC = () => {
  const platformKeys = getPlatformKeys()
  const [choices, setChoices] = React.useState(platformKeys)
  const [sortState, setSortState] = React.useState<SortState>({
    type: 'default',
    direction: 'desc',
  })
  const gameList = getGameMasterData()
  const filterdGameList = getFilterdGameList(
    gameList,
    choices,
    sortState.type,
    sortState.direction,
  )

  const changePlatform = React.useCallback(
    (choice: string) => {
      if (choice === 'ALL') {
        setChoices(choices.length ? [] : platformKeys)
        return
      }
      if (choices.includes(choice)) {
        setChoices(choices.filter((item) => item !== choice && item !== 'ALL'))
      } else {
        setChoices([...choices, choice])
      }
    },
    [choices],
  )

  const changeSortType = React.useCallback(
    (type: SortTypes) => {
      if (type === sortState.type) {
        setSortState({
          ...sortState,
          direction: sortState.direction === 'asc' ? 'desc' : 'asc',
        })
        return
      }
      setSortState({ ...sortState, type })
    },
    [sortState],
  )

  return (
    <>
      <SelectPlatforms
        label={'機種'}
        keys={platformKeys}
        choices={choices}
        handleSelect={changePlatform}
      />
      <Result count={filterdGameList.length} />
      {filterdGameList.length ? (
        <TableWrapper>
          <>
            <TableHead
              sortType={sortState.type}
              handleSortTitle={() => changeSortType('title')}
              handleSortPlatform={() => changeSortType('platform')}
              handleSortPublisher={() => changeSortType('publisher')}
              sortDirection={sortState.direction}
            />
            <TableBody gameList={filterdGameList} />
          </>
        </TableWrapper>
      ) : (
        <ErrorMessage message="見つからなかった" />
      )}
    </>
  )
}
