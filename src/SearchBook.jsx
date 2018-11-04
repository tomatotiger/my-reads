import React, { Component } from 'react'
import BooksList from './BooksList'
import PropTypes from 'prop-types'

class SearchBook extends Component {
  static prPpTypes = {
    books: PropTypes.array.isRequired,
    shelves: PropTypes.object.isRequired,
  }

  state = {
    'keyWords': '',
    'foundBooks': []
  }

  render () {
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <a className='close-search' onClick={() => this.setState({ showSearchPage: false })}>Close</a>
          <div className='search-books-input-wrapper'>
            {/*
              NOTES: The search from BooksAPI is limited to a particular set of search terms.
              You can find these search terms here:
              https://github.com/udacity/reactnd-project-myreads-starter/blob/master/SEARCH_TERMS.md

              However, remember that the BooksAPI.search method DOES search by title or author. So, don't worry if
              you don't find a specific author or title. Every search is limited by search terms.
            */}
            <input type='text' placeholder='Search by title or author' />
          </div>
        </div>
        <div className='search-books-results'>
          <BooksList
            books={this.props.books}
            changeShelf={this.props.changeShelf}
          />
        </div>
      </div>
    )
  }
}

export default SearchBook
