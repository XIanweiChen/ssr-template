import React from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';

// const data = await axios.get('http://jsonplaceholder.typicode.com/comments')
// console.log(data)

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      data: [],
    }

  }

  async componentDidMount() {
    const res = await axios.get('http://jsonplaceholder.typicode.com/comments')
    this.setState({
      data: res.data,
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit
            {' '}
            <code>src/App.js</code>
            {' '}
            and save to reload111!!.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {this.state.data.length > 0
            && this.state.data.map((item) => (
              <p key={item.name}>
                {item.name}
              </p>
            ))}
        </header>
      </div>
    )
  }
}


export default App;
