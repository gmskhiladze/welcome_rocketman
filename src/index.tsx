import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import redux from "./store/redux";

import './index.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <Provider store={redux}>
        <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);