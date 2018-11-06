import React from 'react'
import { Route } from 'react-router-dom'
import SearchBook from './searchBook'
import Homepage from './homepage'
import './app.css'

class BooksApp extends React.Component {
  render () {
    return (
      <div className='app'>
        <Route exact path='/' render={() => (
          <Homepage />
        )} />
        <Route path='/search' render={() => (
          <SearchBook />
        )} />
      </div>
    )
  }
}

export default BooksApp
