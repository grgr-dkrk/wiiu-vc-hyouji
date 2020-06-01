import { Game, GameList } from '../types/Game'
import Data from '../assets/GameList'
import { SortTypes, SortDirection } from '../types/Form'

/**
 * Constants
 */
export const GAME_CONSTANTS = {
  NO_TITLE: 'no title',
  NO_PLATFORM: 'no platform',
  NO_PUBLISHER: 'no publisher',
  NO_PUBLISH_DATE: 'no publish date',
} as const

export const platform: Record<Game['platform'], string> = {
  ALL: '全て',
  FC: 'ファミコン',
  SFC: 'スーパーファミコン',
  PCE: 'PCエンジン',
  N64: 'ニンテンドー64',
  MSX: 'MSX',
  GBA: 'GBA',
  DS: 'DS',
} as const

/**
 * getter
 */
export const getGameMasterData = (): GameList => Data
export const getGameTitle = (game: Game) => game.title
export const getGamePlatform = (game: Game) => game.platform
export const getGamePublisher = (game: Game) => game.publisher
export const getGamePublishDate = (game: Game) => game.publishDate
export const getPlatformKeys = () => Object.keys(platform)

export const findGameTitle = (games: GameList) =>
  games.find((game) => game.title)

/**
 * Filter, Sort
 */
export const filterPlatform = (
  gameList: GameList,
  platform: Game['platform'][],
) => {
  if (platform.includes('ALL')) return gameList
  return gameList.filter((game) => platform.includes(game.platform))
}

export const compare = (x: string, y: string) => x.localeCompare(y, 'ja')

export const sortGameList = (
  gameList: GameList,
  sortType: SortTypes,
  sortDirection: SortDirection,
) => {
  if (sortType === 'default') return gameList
  const sortedGameList =
    sortType === 'title'
      ? gameList.slice().sort((x, y) => compare(x.title, y.title))
      : sortType === 'platform'
      ? gameList.slice().sort((x, y) => compare(x.platform, y.platform))
      : sortType === 'publisher'
      ? gameList.slice().sort((x, y) => compare(x.publisher, y.publisher))
      : gameList
  return sortDirection === 'asc'
    ? sortedGameList
    : sortedGameList.slice().reverse()
}

export const getFilterdGameList = (
  gameList: GameList,
  platform: Game['platform'][],
  sortType: SortTypes,
  sortDirection: SortDirection,
) => {
  const filterdList = filterPlatform(gameList, platform)
  return sortGameList(filterdList, sortType, sortDirection)
}
