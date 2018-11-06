import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Book from './book'

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
