import React, { Component } from 'react'
import BooksList from './booksList'
import { Link } from 'react-router-dom'
import * as BooksAPI from './booksAPI'

class SearchBook extends Component {
  componentDidMount () {
    BooksAPI.getAll()
      .then(books => {
        const shelfByBook = {}
        for (const book of books) {
          shelfByBook[book.id] = book.shelf
        }
        this.setState({ shelfByBook })
      })
  }

  state = {
    'keyWords': '',
    'foundBooks': [],
    'message': '',
    'shelfByBook': {}
  }

  addBookToShelf = (book, moveTo) => {
    this.setState((currentState) => ({
      foundBooks: currentState.foundBooks.map(currentBook => currentBook.id === book.id
        ? { ...book, shelf: moveTo }
        : currentBook),
      shelfByBook: { ...currentState.shelfByBook,
        [book.id]: moveTo
      }
    }))
  }

  onSearch = keyWords => {
    const trimmedKeyWords = keyWords.trim()
    if (trimmedKeyWords !== '') {
      BooksAPI.search(trimmedKeyWords).then((result) => {
        result.error === undefined
          ? this.setState({
            keyWords: trimmedKeyWords,
            foundBooks: result,
            message: `${result.length} books found.`
          })
          : this.setState({
            keyWords: trimmedKeyWords,
            foundBooks: [],
            message: result.error
          })
      })
    } else {
      this.setState({
        keyWords: trimmedKeyWords,
        message: '',
        foundBooks: []
      })
    }
  }

  render () {
    return (
      <div className='search-books'>
        <div className='search-books-bar'>
          <Link className='close-search' to='/'>Close</Link>
          <div className='search-books-input-wrapper'>
            <input
              type='text'
              placeholder='Search by title or author'
              onChange={event => this.onSearch(event.target.value)}
            />
          </div>
        </div>
        <div className='search-books-results'>
          <p className='warning'>{this.state.message}</p>
          <BooksList
            books={this.state.foundBooks.map(
              book => ({ ...book,
                shelf: this.state.shelfByBook[book.id] })
            )}
            onChangeShelf={this.addBookToShelf}
          />
        </div>
      </div>
    )
  }
}

export default SearchBook
