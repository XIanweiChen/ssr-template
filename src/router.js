import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import React from 'react';
import { hot } from 'react-hot-loader/root';
import './App.css';
import Index from './App'

function About() {
  return <h2>About</h2>;
}

function Users() {
  return <h2>Users</h2>;
}

function MyRouter() {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about/">About</Link>
            </li>
            <li>
              <Link to="/users/">Users</Link>
            </li>
          </ul>
        </nav>
      </div>

      <Route path="/" exact component={Index} />
      <Route path="/about/" component={About} />
      <Route path="/users/" component={Users} />
    </Router>
  )
}
const isDev = process.env.NODE_ENV === 'development'
let main //eslint-disable-line
if (isDev) {
  main = hot(MyRouter);
} else {
  main = MyRouter;
}

export default main;
