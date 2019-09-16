import { BrowserRouter as Router, Link } from 'react-router-dom'
import React from 'react';
import { hot } from 'react-hot-loader/root';
import Routes from '../router/router'


function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Main</Link>
          </li>
          <li>
            <Link to="/about/">About</Link>
          </li>
        </ul>
      </nav>
      <Routes />
    </Router>
  )
}
const isDev = process.env.NODE_ENV === 'development'
let main //eslint-disable-line
if (isDev) {
  main = hot(App);
} else {
  main = App;
}

export default main;
