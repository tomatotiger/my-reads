import React, { Component } from 'react'
import PropTypes from 'prop-types'
import BookOperate from './bookOperate'
import * as BooksAPI from './booksAPI'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    onChangeShelf: PropTypes.func.isRequired
  }

  changeShelf = (book, moveTo) => {
    BooksAPI.update(book, moveTo)
      .then(() => this.props.onChangeShelf(book, moveTo))
  }

  render () {
    return (
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url("${(this.props.book.imageLinks || {}).thumbnail}")` }} />
          <div className='book-shelf-changer'>
            <BookOperate
              book={this.props.book}
              onChangeShelf={this.changeShelf}
            />
          </div>
        </div>
        <div className='book-title'>{this.props.book.title}</div>
        {(this.props.book.authors || []).map(author => (
          <div className='book-authors' key={author}>{author}</div>
        ))}
      </div>
    )
  }
}

export default Book
