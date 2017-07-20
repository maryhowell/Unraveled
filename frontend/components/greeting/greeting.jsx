
import React from 'react';
import { Link } from 'react-router-dom';
import AuthModal from '../modals/auth_modal';



const signedOutGreeting = () => (
  <header className="main-head">
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          UnRavled
        </Link>
      </div>

    <ul>
      <li><a className="navbutton" href="#homeSection">Home</a></li>
      <li><a className="navbutton" href="#patternSection">Patterns</a></li>
        <nav className="login-signup-buttons">
          &nbsp;
          <AuthModal formType="login"/>
          &nbsp;
          <AuthModal formType="signup"/>
        </nav>
    </ul>


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
