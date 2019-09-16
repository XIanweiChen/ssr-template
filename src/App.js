import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios';

// const data = await axios.get('http://jsonplaceholder.typicode.com/comments')
// console.log(data)

class App extends React.Component {
  state= {
    data:[]
  }
  async componentDidMount(){
    const res = await axios.get('http://jsonplaceholder.typicode.com/comments')
    console.log(res.data)
    this.setState({
      data:res.data
    })
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload1121!!.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          {this.state.data.length>0&&this.state.data.map(item=>{
            return  <p>{item.name}</p>
          })}
        </header>
      </div>
    )
  }
}



export default App;
