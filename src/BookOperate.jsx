import React, { Component } from 'react'
import propTypes from 'prop-types'

class BookOperate extends Component {
  static propTypes = {
    books: propTypes.array.isRequired,
  }

  render() {
    return(
      <select>
        <option value="move" disabled>Move to...</option>
        <option value="currentlyReading">Currently Reading</option>
        <option value="wantToRead">Want to Read</option>
        <option value="read">Read</option>
        <option value="none">None</option>
      </select>
    )
  }
}

export default BookOperate
