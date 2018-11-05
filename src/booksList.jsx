import React, { Component } from 'react'
import Book from './book'
import PropTypes from 'prop-types'

class BooksList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  render () {
    return (
      <ol className='books-grid'>
        {this.props.books.map(book => (
          <li key={book.id}>
            <Book
              book={book}
              onChangeShelf={this.props.onChangeShelf}
            />
          </li>
        ))}
      </ol>
    )
  }
}

export default BooksList
