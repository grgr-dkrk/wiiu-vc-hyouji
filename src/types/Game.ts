export type GameId = string
export type GameTitle = string
export type GamePlatform = string
export type GamePublisher = string
export type GamePublishDate = string
export type GamePublishYear = string
export type GameUrl = string
export type GameRemarks = string

export type Game = {
  id: GameId
  title: GameTitle
  platform: GamePlatform
  publisher: GamePublisher
  publishDate: GamePublishDate
  publishYear: GamePublishYear
  url?: GameUrl
  remarks?: GameRemarks
}

export type GameList = Game[]
