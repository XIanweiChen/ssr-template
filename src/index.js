import React from 'react';
import ReactDom from 'react-dom';
import './index.css';
import Router from './router';



ReactDom.hydrate(<Router />,document.getElementById('root'))