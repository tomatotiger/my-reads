import React from 'react'
import PropTypes from 'prop-types'
import Book from './book'

function BooksList (props) {
  return (
    <ol className='books-grid'>
      {props.books.map(book => (
        <li key={book.id}>
          <Book
            book={book}
            onChangeShelf={props.onChangeShelf}
          />
        </li>
      ))}
    </ol>
  )
}

BooksList.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}

export default BooksList
