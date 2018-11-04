import React, { Component } from 'react'
import BooksList from './BooksList'
import PropTypes from 'prop-types'

class ShelvesList extends Component {
  static propTypes = {
    books: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
}

  groupByShelf = books => {
    let shelfBooks = {};
    books.map(book => (book.shelf in shelfBooks?
      shelfBooks[book.shelf].push(book)
      :shelfBooks[book.shelf] = [book]))
    return shelfBooks
  }

  render() {
    const shelfBooks = this.groupByShelf(this.props.books) 
    return(
      <div>
        {
          Object.entries(shelfBooks).map(([shelf, books]) => (
            <div className="bookshelf" key={shelf}>
              <h2 className="bookshelf-title">{shelf}</h2>
              <div className="bookshelf-books">
                <BooksList 
                  books={books}
                  shelves={Object.keys(shelfBooks)}
                  changeShelf={this.changeShelf}
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
