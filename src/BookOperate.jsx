import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookOperate extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    shelves: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  changeShelf = event => {
    this.props.changeShelf(this.props.book, event.target.value)
  }

  render () {
    return (
      <select value={this.props.book.shelf} onChange={this.changeShelf}>
        <option value='move' disabled>Move to...</option>
        {Object.entries(this.props.shelves).map(([key, shelf])=> (
          <option
            value={key}
            key={key}
          >
            {shelf.title}</option>
        ))}
      </select>
    )
  }
}

export default BookOperate
