import React from 'react'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import * as BooksAPI from './BooksAPI'
import SearchBook from './SearchBook'
import ShelvesList from './ShelvesList'
import {Route} from 'react-router-dom'

class BooksApp extends React.Component {
  state = {
    /**
     * TODO: Instead of using this state variable to keep track of which page
     * we're on, use the URL in the browser's address bar. This will ensure that
     * users can use the browser's back and forward buttons to navigate between
     * pages, as well as provide a good URL they can bookmark and share.
     */
    showSearchPage: false,
    books: [],
  }

  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState(currentState => ({
          ...currentState,
          'books': books
        }))
      })
  }

  changeShelf = (book, moveTo) => {
    // BooksAPI.update(book, moveTo)
    //   .then()
  }

  render() {
    return (
      <div className="app">
        <Route exact path='/' render={() => ( 
          <div className="list-books">
            <div className="list-books-title">
              <h1>MyReads</h1>
            </div>
            <div className="list-books-content">
              <div>
                <ShelvesList 
                  books={this.state.books} 
                  changeShelf={this.changeShelf}
                />
              </div>
            </div>
            <div className="open-search">
              <a href='/search'>Add a book</a>
            </div>
          </div>
        )} />
        <Route path='/search' component={SearchBook} />
      </div>
    )
  }
}

export default BooksApp
