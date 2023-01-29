import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { fetchAllCards } from './api/api';
import reducer from './redux/reducers/reducer';
import AllCards from './AllCards/AllCards.js';

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(fetchAllCards());

ReactDOM.render(
  <Provider store={store}>
    <AllCardsPage />
  </Provider>,
  document.getElementById('root')
);
