import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { shelves } from './helper'

class BookOperate extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  changeShelf = event => {
    this.props.onChangeShelf(this.props.book, event.target.value)
  }

  render () {
    return (
      <select value={this.props.book.shelf || 'empty'} onChange={this.changeShelf}>
        <option value='move' disabled>Move to...</option>
        {Object.entries(shelves).map(([key, shelf]) => (
          <option
            value={key}
            key={key}
          >
            {shelf.title}</option>
        ))}
        <option value='empty'>None</option>
      </select>
    )
  }
}

export default BookOperate
