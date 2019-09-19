import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'mobx-react'
import { BrowserRouter as Router } from 'react-router-dom'
import AppState from './store/app-state';
import './index.css';
import App from './views/App';


// const renderMethod = module.hot ? ReactDom.render : ReactDOM.hydrate;
// console.log(renderMethod.name)

const temp = <Provider appState={new AppState()}><Router><App /></Router></Provider>
ReactDom.hydrate(temp, document.getElementById('root'))
