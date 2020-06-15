import { OwnList } from '../../types/OwnList'

export const setOwnListToStorage = (ownList: OwnList) => {
  localStorage.setItem('ownList', JSON.stringify(ownList))
}

export const getOwnListOfStorage = (): OwnList | void => {
  const storageItem = localStorage.getItem('ownList')
  if (!storageItem) return
  return JSON.parse(storageItem)
}

export const initOwnListOfStorage = () => {
  localStorage.setItem('ownList', '')
}
