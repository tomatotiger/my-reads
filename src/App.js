import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI'
import SearchBook from './SearchBook'
import ShelvesList from './ShelvesList'
import { Route } from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    books: [],
    shelves: {}
  }

  componentDidMount () {
    BooksAPI.getAll()
      .then(books => {
        this.setState({
          books,
          shelves: this.getShelves(books)
        })
      })
  }

  getShelves = (books) => {
    let shelves = {
      'currentlyReading': {
        'title': 'Currently Reading'
      },
      'wantToRead': {
        'title': 'Want To Read'
      },
      'read': {
        'title': 'Read'
      }
    }
    for (const book of books) {
      if (!Object.keys(shelves).includes(book.shelf)) {
        shelves[book.shelf] = { 'title': book.shelf }
      }
    }
    return shelves
  }

  changeShelf = (book, moveTo) => {
    BooksAPI.update(book, moveTo)
      .then(() => {
        this.setState((currentState) => ({
          books: currentState.books.map(currentBook => currentBook.id === book.id
            ? { ...book, shelf: moveTo }
            : currentBook)
        }))
      })
  }

  render () {
    return (
      <div className='app'>
        <Route exact path='/' render={() => (
          <div className='list-books'>
            <div className='list-books-title'>
              <h1>MyReads</h1>
            </div>
            <div className='list-books-content'>
              <div>
                <ShelvesList
                  books={this.state.books}
                  shelves={this.state.shelves}
                  changeShelf={this.changeShelf}
                />
              </div>
            </div>
            <div className='open-search'>
              <a href='/search'>Add a book</a>
            </div>
          </div>
        )} />
        <Route path='/search' render={() => (
          <SearchBook
            books={this.state.books}
            shelves={this.state.shelves}
            changeShelf={this.changeShelf}
          />
        )} />
      </div>
    )
  }
}

export default BooksApp
