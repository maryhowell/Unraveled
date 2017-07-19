
import React from 'react';
import { Link } from 'react-router-dom';
import AuthModal from '../modals/auth_modal';

const signedOutGreeting = () => (
  <header className="login-signup">
    <nav className="listen-here-logo">
      <Link to="/">
        
      </Link>
    </nav>

    <nav className="login-signup-buttons">
      &nbsp;
      <AuthModal formType="login"/>
      &nbsp;
      <AuthModal formType="signup"/>
    </nav>
  </header>
);

const signedInGreeting = (currentUser, logout) => (
	<hgroup className="header-group">
    <h2 className="header-name">Hi, {currentUser.email}!</h2>
    <button className="header-button" onClick={logout}>Sign Out</button>
	</hgroup>
);


const Greeting = ({ currentUser, logout }) => (
  currentUser ? signedInGreeting(currentUser, logout) : signedOutGreeting()
);

export default Greeting;
