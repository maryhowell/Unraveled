import React from 'react';
import { Provider } from 'react-redux';
import { HashRouter, Route, IndexRoute, hashHistory } from 'react-router-dom';

import App from './app';
import { Masthead } from './masthead/masthead';

const Root = ({ store }) => (
  <Provider store={store}>
    <HashRouter>
      <Route path='/' component={ App }>
        <IndexRoute components={ Masthead } />
      </Route>
    </HashRouter>
  </Provider>
);

export default Root;
