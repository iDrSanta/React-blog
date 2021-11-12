import React from 'react';
import ReactDOM from 'react-dom';
import 'macro-css';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';

import store from './redux/store';
import './index.scss';
import App from './App';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
