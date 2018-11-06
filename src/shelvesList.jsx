import React from 'react'
import PropTypes from 'prop-types'
import BooksList from './booksList'
import { shelves } from './helper'

function ShelvesList (props) {
  return (
    <div>
      {Object.entries(shelves).map(([key, shelf]) => (
        <div className='bookshelf' key={key}>
          <h2 className='bookshelf-title'>{shelf.title}</h2>
          <div className='bookshelf-books'>
            <BooksList
              books={props.books.filter(book => book.shelf === key)}
              onChangeShelf={props.onChangeShelf}
            />
          </div>
        </div>
      ))
      }
    </div>
  )
}

ShelvesList.propTypes = {
  books: PropTypes.array.isRequired,
  onChangeShelf: PropTypes.func.isRequired
}
export default ShelvesList
