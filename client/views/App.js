import React from 'react';
import { BrowserRouter as Router, Link } from 'react-router-dom'
import { hot } from 'react-hot-loader/root';
import { Provider } from 'mobx-react'
import appState from '../store/app-state';
import Routes from '../router/router'


function App() {
  return (
    <Provider appState={appState}>
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
    </Provider>
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
