import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import App from './views/App';


// const renderMethod = module.hot ? ReactDom.render : ReactDOM.hydrate;
// console.log(renderMethod.name)
ReactDom.hydrate(<App />, document.getElementById('root'))
