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
import { Game } from '../../types/Game'
import Recoil from 'recoil' // TODO: wait for ESM
import { ownListState } from '../../controllers/OwnList/State'
import { getAddedOwnList, getRemovedOwnList } from '../../domain/OwnList'
import {
  setOwnListToStorage,
  getOwnListOfStorage,
  initOwnListOfStorage,
} from '../../controllers/OwnList/Storage'
import { OwnList } from '../../types/OwnList'
import { Button } from '../components/Button'
import { SelectOtherOptions } from '../components/SelectOtherOptions'
import { ResultWrapper } from '../components/ResultWrapper'

type SortState = {
  type: SortTypes
  direction: SortDirection
}

type FilterState = {
  platforms: Game['platform'][]
  ownList: OwnList
}

export const DataTable: React.FC = () => {
  const platformKeys = getPlatformKeys()
  const [filterState, setFilterState] = React.useState<FilterState>({
    platforms: platformKeys,
    ownList: [],
  })
  const [sortState, setSortState] = React.useState<SortState>({
    type: 'default',
    direction: 'asc',
  })
  const gameList = getGameMasterData()
  // TODO: move something
  const [ownList, setOwnList] = Recoil.useRecoilState(ownListState)

  React.useEffect(() => {
    const storageOwnList = getOwnListOfStorage()
    if (!storageOwnList) return
    setOwnList(storageOwnList)
  }, [])

  const filterdGameList = getFilterdGameList(
    gameList,
    filterState.platforms,
    sortState.type,
    sortState.direction,
    ownList,
  )

  const changePlatform = React.useCallback(
    (choice: string) => {
      if (choice === 'ALL') {
        setFilterState({
          ...filterState,
          platforms: filterState.platforms.length ? [] : platformKeys,
        })
        return
      }
      if (filterState.platforms.includes(choice)) {
        setFilterState({
          ...filterState,
          platforms: filterState.platforms.filter(
            (item) => item !== choice && item !== 'ALL',
          ),
        })
      } else {
        setFilterState({
          ...filterState,
          platforms: [...filterState.platforms, choice],
        })
      }
    },
    [filterState.platforms],
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

  const updateOwnList = (checked: boolean, id: Game['id']) => {
    let newOwnList: OwnList = []
    if (checked) {
      newOwnList = getAddedOwnList(ownList, id)
    } else {
      newOwnList = getRemovedOwnList(ownList, id)
    }
    setOwnList(newOwnList)
    setOwnListToStorage(newOwnList)
  }

  const initOwnList = () => {
    if (confirm('所有リストを初期化しますか')) {
      setOwnList([])
      initOwnListOfStorage()
    }
  }

  return (
    <>
      <SelectPlatforms
        label={'機種'}
        keys={platformKeys}
        choices={filterState.platforms}
        handleSelect={changePlatform}
      />
      <SelectOtherOptions handleInitOwnList={initOwnList} />
      <ResultWrapper
        gameListLength={filterdGameList.length}
        ownListLength={ownList.length}
      />
      {filterdGameList.length ? (
        <TableWrapper>
          <>
            <TableHead
              sortType={sortState.type}
              handleSortTitle={() => changeSortType('title')}
              handleSortPlatform={() => changeSortType('platform')}
              handleSortPublisher={() => changeSortType('publisher')}
              handleSortOwn={() => changeSortType('own')}
              sortDirection={sortState.direction}
            />
            <TableBody
              gameList={filterdGameList}
              ownList={ownList}
              handleChecked={updateOwnList}
            />
          </>
        </TableWrapper>
      ) : (
        <ErrorMessage message="見つからなかった" />
      )}
    </>
  )
}
