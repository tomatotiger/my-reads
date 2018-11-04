import React, { Component } from 'react'
import BooksList from './BooksList'
import propTypes from 'prop-types'

class ShelvesList extends Component {
  static propTypes = {
    books: propTypes.array.isRequired,
  }

  render() {
    return(
      <div>
        <div className="bookshelf">
          <h2 className="bookshelf-title">Currently Reading</h2>
          <div className="bookshelf-books">
            <BooksList />
          </div>
        </div>
      </div>
    )
  }
}

export default ShelvesList
