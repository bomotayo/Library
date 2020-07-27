import React from 'react';
import ReactDOM from 'react-dom';
import "./styles.css";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App';
import { loadState, saveState } from './localStorage';
import reducers from './reducers';
import throttle from 'lodash/throttle';

const persistedState = loadState();
const store = createStore(reducers, persistedState, applyMiddleware(thunk));

store.subscribe(throttle(() => {
  saveState(
   store.getState()
  );
}, 1000));

ReactDOM.render(
    <Provider store={store}>
      <App />
    </Provider>
  ,
  document.querySelector('#root')
)