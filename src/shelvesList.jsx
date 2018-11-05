import React, { Component } from 'react'
import BooksList from './booksList'
import PropTypes from 'prop-types'
import { shelves } from './helper'

class ShelvesList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  render () {
    return (
      <div>
        {Object.entries(shelves).map(([key, shelf]) => (
          <div className='bookshelf' key={key}>
            <h2 className='bookshelf-title'>{shelf.title}</h2>
            <div className='bookshelf-books'>
              <BooksList
                books={this.props.books.filter(book => book.shelf === key)}
                onChangeShelf={this.props.onChangeShelf}
              />
            </div>
          </div>
        ))
        }
      </div>
    )
  }
}

export default ShelvesList
