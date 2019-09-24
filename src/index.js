import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import EventHandleApp from './EventHandleApp'
import ConditionalRendering from './ConditionalRendering'

import AppToDos from './AppToDos'

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ConditionalRendering />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
