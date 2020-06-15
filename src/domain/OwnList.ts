import { Game } from '../types/Game'
import { OwnList } from '../types/OwnList'

export const getAddedOwnList = (ownList: OwnList, addId: string) => [
  ...ownList,
  addId,
]

export const getRemovedOwnList = (ownList: OwnList, removeId: string) =>
  ownList.filter((item) => item !== removeId)

export const isExistOwnId = (ownList: OwnList, id: Game['id']) =>
  ownList.includes(id)
