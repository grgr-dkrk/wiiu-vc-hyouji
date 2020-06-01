export const LAYOUT_SIZE = {
  SIDEBAR: 250,
  SIDE_MARGIN: 60,
  INNER_WIDTH_PC: 990,
}

export const SITE_COLOR = {
  MAIN: '#90A4AE',
  BG: '#ECEFF1',
  SUB: '#455A64',
  ACCENT: '#f50057',
  SUCCES: '#4caf50',
  DARK: '#2b2b2b',
  WHITE: '#fff',
  IMPORTANT: '#311b92',
} as const

export const BREAK_POINT = {
  SMALL: mq(400, 'max'),
  SMALL_MIN: mq(400, 'min'),
  MID: mq(767, 'max'),
  MID_MIN: mq(767, 'min'),
  MID_MIN_MAX: mq(767, 'minMax'),
}

function mq(bp: number, type: string) {
  if (type === 'minMax') {
    return `@media screen and (min-width: ${bp + 1}px) and (max-width: ${
      LAYOUT_SIZE.INNER_WIDTH_PC
    }px)`
  }
  const fix = type === 'min' ? 1 : 0
  return `@media screen and (${type}-width: ${bp + fix}px)`
}
