import * as fs from 'fs'
import * as path from 'path'
import { Parser } from './parser'

const html = fs.readFileSync(path.resolve(__dirname, './data.html'), {
  encoding: 'utf-8',
})

const parsedData = Parser(html)
fs.writeFileSync(
  path.resolve(__dirname, '../assets/GameList.json'),
  JSON.stringify(parsedData, null, 2),
)
