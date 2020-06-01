import * as GameDomain from './Game'
import { Game } from '../types/Game'

const createGameMockData = (id: Game['id'], diff?: Partial<Game>): Game => ({
  id,
  platform: '',
  title: GameDomain.GAME_CONSTANTS.NO_TITLE,
  publisher: GameDomain.GAME_CONSTANTS.NO_PUBLISHER,
  publishDate: '07月13日',
  publishYear: '2019',
  remarks: '',
  ...diff,
})

/**
 * Getter
 */
describe('getter', () => {
  test('getGameTitle', () => {
    expect(
      GameDomain.getGameTitle(
        createGameMockData('gameId', { title: 'expectedTitle' }),
      ),
    ).toBe('expectedTitle')
  })
  test('getGamePlatform', () => {
    expect(
      GameDomain.getGamePlatform(
        createGameMockData('gameId', { platform: 'FC' }),
      ),
    ).toBe('FC')
  })
  test('getGamePublisher', () => {
    expect(
      GameDomain.getGamePublisher(
        createGameMockData('gameId', { publisher: 'MINTENDO' }),
      ),
    ).toBe('MINTENDO')
  })
})
