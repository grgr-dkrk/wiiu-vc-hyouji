import Recoil from 'recoil' // TODO: wait for ESM
import { OwnList } from '../../types/OwnList'

export const ownListState = Recoil.atom<OwnList>({
  key: 'ownListState',
  default: [],
})
