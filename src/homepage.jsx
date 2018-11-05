import React, { Component } from 'react'
import ShelvesList from './shelvesList'
import * as BooksAPI from './booksAPI'
import { Link } from 'react-router-dom'

class Homepage extends Component {
  state = {
    books: []
  }

  componentDidMount () {
    BooksAPI.getAll()
      .then(books => {
        this.setState({
          books
        })
      })
  }

  onChangeShelf = (book, moveTo) => {
    this.setState((currentState) => ({
      books: currentState.books.map(currentBook => currentBook.id === book.id
        ? { ...book, shelf: moveTo }
        : currentBook)
    }))
  }

  render () {
    return (
      <div className='list-books'>
        <div className='list-books-title'>
          <h1>MyReads</h1>
        </div>
        <div className='list-books-content'>
          <div>
            <ShelvesList
              books={this.state.books}
              onChangeShelf={this.onChangeShelf}
            />
          </div>
        </div>
        <div className='open-search'>
          <Link to='/search'>Add a book</Link>
        </div>
      </div>
    )
  }
}

export default Homepage
