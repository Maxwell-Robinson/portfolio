import React, { Component } from 'react'

import Link from './link'
import About from './about'
import Portfolio from './portfolio'
import Heading from './heading'
import Blog from './blog'
import Contact from './contact'

class App extends Component {

  render () {
    return (
      <div>
        <Link linkName="About" />
        <Link linkName="Blog" />
        <Heading name={this.props.name} role={this.props.role} />
        <Link linkName="Portfolio" />
        <Link linkName="Contact" />
      </div>
    )
  }

}

export default App
