import React from 'react'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Home from './modules/home/Home'

export default () =>
  <Router>
    <div>
      <ul>
        <li><Link to='/'>Home</Link></li>
      </ul>

      <hr />

      <Route exact path='/' component={Home} />
    </div>
  </Router>
