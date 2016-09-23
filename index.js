import React from 'react'
import ReactDOM, { render } from 'react-dom'
import App from './client/components/app'

const INITIAL_DATA = {
  name: "Maxwell Robinson",
  role: "A Humble Programmer (of doom)"
}

ReactDOM.render(<App {...INITIAL_DATA} />, document.querySelector('main'))
