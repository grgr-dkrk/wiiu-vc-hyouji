import * as React from 'react'
import { TableWrapper } from '../components/TableWrapper'
import { TableHead } from '../components/TableHead'
import {
  getGameMasterData,
  getPlatformKeys,
  getFilterdGameList,
} from '../../domain/Game'
import { TableBody } from '../components/TableBody'
import { Select } from '../components/Select'

export const DataTable: React.FC = () => {
  const platformKeys = getPlatformKeys()
  const [choices, setChoices] = React.useState(platformKeys)
  const headings = ['タイトル', '機種', 'メーカー']
  const gameList = getGameMasterData()
  const filterdGameList = getFilterdGameList(gameList, choices)

  const changePlatform = React.useCallback(
    (choice: string) => {
      if (choices.includes(choice)) {
        setChoices(choices.filter((item) => item !== choice || item !== 'ALL'))
      } else {
        setChoices([...choices, choice])
      }
    },
    [choices],
  )

  return (
    <>
      <Select
        label={'機種'}
        keys={platformKeys}
        choices={choices}
        handleSelect={changePlatform}
      />
      <TableWrapper>
        <>
          <TableHead headings={headings} />
          <TableBody gameList={filterdGameList} />
        </>
      </TableWrapper>
    </>
  )
}
