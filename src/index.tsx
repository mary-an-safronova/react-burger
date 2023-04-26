import React from 'react';
import ReactDOM from 'react-dom/client';
import { legacy_createStore as createStore} from 'redux'
import { Provider } from 'react-redux';
import './index.css';
import App from './components/app/app';
import { rootReducer } from './services/reducers/index';

const store = createStore(rootReducer);


const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);