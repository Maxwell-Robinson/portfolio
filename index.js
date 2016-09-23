import React from 'react'
import ReactDOM, { render } from 'react-dom'
import App from './client/components/app'

const INITIAL_DATA = {
  name: "Cameron Shotter",
  role: "Web Developer & Creator of Awesome Things_"
}

ReactDOM.render(<App {...INITIAL_DATA} />, document.querySelector('main'))
