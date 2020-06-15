import * as OwnListDomain from './OwnList'
import { OwnList } from '../types/OwnList'

const createOwnListMockData = (...args: string[]): OwnList => [...args]

describe('getAddedOwnList', () => {
  it('return added id', () => {
    expect(
      OwnListDomain.getAddedOwnList(createOwnListMockData('123', '456'), '789'),
    ).toStrictEqual(['123', '456', '789'])
  })
  it('return added id if ownList is empty', () => {
    expect(
      OwnListDomain.getAddedOwnList(createOwnListMockData(), '123'),
    ).toStrictEqual(['123'])
  })
})

describe('getRemovedOwnList', () => {
  it('return removed id', () => {
    expect(
      OwnListDomain.getRemovedOwnList(
        createOwnListMockData('123', '456', '789'),
        '789',
      ),
    ).toStrictEqual(['123', '456'])
  })
  it('return empty if ownList is empty', () => {
    expect(
      OwnListDomain.getRemovedOwnList(createOwnListMockData(), '123'),
    ).toStrictEqual([])
  })
})

describe('isExistOwnId', () => {
  it('return true if included', () => {
    expect(
      OwnListDomain.isExistOwnId(
        createOwnListMockData('123', '456', '789'),
        '789',
      ),
    ).toBe(true)
  })
  it('return false if not included', () => {
    expect(
      OwnListDomain.isExistOwnId(createOwnListMockData('123', '456'), '789'),
    ).toBe(false)
  })
})
