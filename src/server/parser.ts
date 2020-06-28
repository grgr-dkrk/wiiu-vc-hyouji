import DomParser from 'dom-parser'
import { Game } from '../types/Game'
import { v4 } from 'uuid'

/**
 * main
 */
export const Parser = (htmlUtf8String: string): Game[] => {
  const domParser = new DomParser()
  const dom = domParser.parseFromString(htmlUtf8String)
  if (!dom) throw new Error('dom is invalid')
  const years = getAllYears(dom).map((year) => year.replace(/（.*$/, ''))
  const tableNodes = getTableNodes(dom)
  if (years.length !== tableNodes.length)
    throw new Error('length validate is failed')
  const data = tableNodes.map((node, index) => walkTable(node, years[index]))
  // eslint-disable-next-line @typescript-eslint/no-array-constructor
  return Array()
    .concat.apply([], data)
    .filter((data) => data)
}

/**
 * getter
 */
export const getAllYears = (dom: DomParser.Dom) => {
  const yearNodes = dom.getElementsByTagName('h2')
  if (!yearNodes) throw new Error('cannot get years')
  return yearNodes.map((node) => node.textContent)
}

export const getTableNodes = (dom: DomParser.Dom) => {
  const tableNodes = dom.getElementsByTagName('table')
  if (!tableNodes) throw new Error('cannot get table contents')
  return tableNodes
}

/**
 * logic
 */
export const walkTable = (node: DomParser.Node, label: string) => {
  const trNodes = node.getElementsByTagName('tr')
  if (!trNodes) throw new Error('dom is invalid')

  return trNodes.map((node) => walkTrNodes(node, label))
}

export const walkTrNodes = (node: DomParser.Node, label: string) => {
  const tdNodes = node.getElementsByTagName('td')
  if (!tdNodes) return

  return setGameData(tdNodes, label)
}

export const setGameData = (
  nodes: DomParser.Node[],
  label: string,
): Game | void => {
  if (!nodes[2]) return
  return {
    id: v4(),
    title: nodes[2]?.textContent,
    platform: nodes[1]?.textContent,
    publisher: nodes[3]?.textContent,
    publishDate: nodes[0]?.textContent,
    publishYear: label,
    remarks: nodes[4]?.textContent.replace('\n', ''),
  }
}
