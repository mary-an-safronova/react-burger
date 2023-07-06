import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import './index.css';
import { App } from './components';
import reportWebVitals from './reportWebVitals';
import { HashRouter } from 'react-router-dom';
import { store } from './services/store';

const root = ReactDOM.createRoot(
  document.getElementById('root')  as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();