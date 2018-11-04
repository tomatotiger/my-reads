import React, { Component } from 'react'
import Book from './Book'
import propTypes from 'prop-types'

class BooksList extends Component {
  static propTypes = {
    books: propTypes.array.isRequired,
  }

  render() {
    return(
      <ol className="books-grid">
        <li>
          <Book />
        </li>
      </ol>
    )
  }
}

export default BooksList
