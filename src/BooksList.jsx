import React, { Component } from 'react'
import Book from './Book'
import PropTypes from 'prop-types'

class BooksList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render () {
    return (
      <ol className='books-grid'>
        {this.props.books.map(book => (
          <li key={book.id}>
            <Book
              book={book}
              shelves={this.props.shelves}
              changeShelf={this.props.changeShelf}
            />
          </li>
        ))}
      </ol>
    )
  }
}

export default BooksList
