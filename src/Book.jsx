import React, { Component } from 'react'
import BookOperate from './BookOperate'
import PropTypes from 'prop-types'

class Book extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    shelves: PropTypes.object.isRequired,
    changeShelf: PropTypes.func.isRequired
  }

  render () {
    return (
      <div className='book'>
        <div className='book-top'>
          <div className='book-cover' style={{ width: 128, height: 193, backgroundImage: `url("${this.props.book.imageLinks.thumbnail}")` }} />
          <div className='book-shelf-changer'>
            <BookOperate
              shelves={this.props.shelves}
              book={this.props.book}
              changeShelf={this.props.changeShelf}
            />
          </div>
        </div>
        <div className='book-title'>{this.props.book.title}</div>
        {this.props.book.authors.map(author => (
          <div className='book-authors' key={author}>{author}</div>
        ))}
      </div>
    )
  }
}

export default Book
