import React from 'react';
import ReactDOM from 'react-dom';
import store from './store/store';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root');
  const store = configureStore();
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  ReactDOM.render(<h1>UNRAVELD</h1>, root);
});
