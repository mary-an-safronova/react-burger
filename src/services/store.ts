import { compose, legacy_createStore as createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { rootReducer } from './reducers';
import { socketMiddleware } from './middleware/socketMiddleware';
import { wsActions } from './actions/ws';
import { wsAuthActions } from './actions/ws-auth';


declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
}
  
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  
const enhancer = composeEnhancers(applyMiddleware(thunk, socketMiddleware(wsActions), socketMiddleware(wsAuthActions)));
  
export const store = createStore(rootReducer, enhancer);