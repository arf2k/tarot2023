import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { fetchAllCards} from './api/api';
import reducer from './redux/reducers/reducer';
import AllCardsPage from './components/AllCards/AllCards.js';

const store = createStore(reducer, applyMiddleware(thunk));

store.dispatch(fetchAllCards());

ReactDOM.render(
  <Provider store={store}>
    <AllCardsPage />
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
