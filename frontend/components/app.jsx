import React from 'react';
import { Provider } from 'react-redux';
import { Route, Redirect, Switch,
  Link, HashRouter } from 'react-router-dom';
import GreetingContainer from './greeting/greeting_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import AuthModal from './modals/auth_modal';
import Masthead from './masthead/masthead';
import Footer from './footer/footer';
import PatternListContainer from './patterns/pattern_list_container';


const App = ( { first }) => (
  <div>
    <header>
      <Link to="/" className="header-link">
      </Link>
      <GreetingContainer />
      <Route exact path='/' component={ Masthead }/>
      <Route path='/patterns' component={ PatternListContainer } />
      <Footer />
    </header>
  </div>
);

export default App;
