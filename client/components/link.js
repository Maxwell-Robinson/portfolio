import React, { Component } from 'react'

class Link extends Component {

  render () {
    return (
      <div className={this.props.linkName}>
        <a href={this.props.linkName}>{this.props.linkName}</a>
      </div>
    )
  }
}

export default Link
