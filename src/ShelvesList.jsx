import React, { Component } from 'react'
import BooksList from './BooksList'
import PropTypes from 'prop-types'

class ShelvesList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
    shelves: PropTypes.object.isRequired
  }

  render () {
    return (
      <div>
        {Object.entries(this.props.shelves).map(([key, shelf]) => (
          <div className='bookshelf' key={key}>
            <h2 className='bookshelf-title'>{shelf.title}</h2>
            <div className='bookshelf-books'>
              <BooksList
                books={this.props.books.filter(book => book.shelf === key)}
                shelves={this.props.shelves}
                changeShelf={this.props.changeShelf}
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
