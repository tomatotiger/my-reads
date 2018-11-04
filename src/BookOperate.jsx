import React, { Component } from 'react'
import PropTypes from 'prop-types'

class BookOperate extends Component {
  static propTypes = {
    book: PropTypes.object.isRequired,
    shelves: PropTypes.array.isRequired,
    changeShelf: PropTypes.func.isRequired,
  }

  changeShelf = event => {
  }

  render() {
    return(
      <select value={this.props.book.shelf}>
        <option value="move" disabled>Move to...</option>
        {this.props.shelves.map(shelf => (
          <option 
            value="{shelf}"
            key={shelf}
            onChange={this.changeShelf}
          >
           {shelf}</option>
        ))}
      </select>
    )
  }
}

export default BookOperate
