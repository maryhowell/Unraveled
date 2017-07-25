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
import PatternItemContainer from './patterns/pattern_item_container';


const App = ( { first }) => (
  <div>
    <header>
      <Link to="/" className="header-link">
      </Link>
      <GreetingContainer />
    <Switch>
      <Route exact path='/' component={ Masthead }/>
      <Route path='/patterns/:patternId'component={ PatternItemContainer } />
      <Route path='/patterns' component={ PatternListContainer } />

    </Switch>

    </header>
  </div>
);

export default App;
  // <Footer />
