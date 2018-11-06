import React from 'react'
import { Route, Switch, Link } from 'react-router-dom'
import SearchBook from './searchBook'
import Homepage from './homepage'
import './app.css'


const NoMatch = ({ location }) => (
  <div>
    <h3> Sorry, we can't found this page: { location.pathname }.</h3>
    <p> Go back to the <Link to='/'> Homepage </Link></p>
  </div>
)


class BooksApp extends React.Component {
  render () {
    return (
      <div className='app'>
        <Switch>
          <Route exact path='/' render={() => (
            <Homepage />
          )} />
          <Route path='/search' render={() => (
            <SearchBook />
          )} />
          <Route component={ NoMatch } />
        </Switch>
      </div>
    )
  }
}

export default BooksApp
