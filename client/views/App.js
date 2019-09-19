import React from 'react';
import { Link } from 'react-router-dom'
// import { hot } from 'react-hot-loader/root';
import Routes from '../router/router'


function App() {
  return (
    <>
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
    </>
  )
}
// const isDev = process.env.NODE_ENV === 'development'
// let main //eslint-disable-line
// if (isDev) {
//   main = hot(App);
// } else {
//   main = App;
// }

export default App;
