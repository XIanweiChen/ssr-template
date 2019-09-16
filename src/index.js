import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Router from './router';

// const renderMethod = module.hot ? ReactDom.render : ReactDOM.hydrate;
// console.log(renderMethod.name)
ReactDom.hydrate(<Router />,document.getElementById('root'))