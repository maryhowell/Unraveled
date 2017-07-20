import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch,
  Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import AuthModal from './modals/auth_modal';

const App = ( { first }) => (
  <div>
    <header>
      <Link to="/" className="header-link">
      </Link>
      <GreetingContainer />
      { first }
    </header>
  </div>
);

export default App;
