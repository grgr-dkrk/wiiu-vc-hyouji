import * as React from 'react'
import * as ReactDom from 'react-dom'
import { App } from './app'

ReactDom.hydrate(<App />, document.getElementById('app'))
