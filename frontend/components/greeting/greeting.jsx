
import React from 'react';
import { Link } from 'react-router-dom';
import AuthModalContainer from '../modals/auth_modal_container';



const signedOutGreeting = login => (
  <header className="main-head">
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          UnRavled
        </Link>
      </div>

    <ul>
        <nav className="login-signup-buttons">
          <button className="demobutton" onClick={ () => login({user:{ email: 'DemoUser@gmail.com', password: '12345678'} })}>Demo</button>
          &nbsp;
          <AuthModalContainer formType="login"/>
          &nbsp;
          <AuthModalContainer formType="signup"/>
        </nav>
    </ul>


    </nav>
  </header>
);

// <li><a className="navbutton" href="#homeSection">Home</a></li>
// <li><a className="navbutton" href="#patternSection">Patterns</a></li>

const signedInGreeting = (currentUser, logout) => (
  <header className="main-head">
    <nav className="navbar">
      <div className="logo">
        <Link to="/">
          UnRavled
        </Link>
      </div>

      <div>
        <span className="user" >Hi, {currentUser.email}!</span>
        <button className="signoutbutton" onClick={logout}>Sign Out</button>
      </div>
    </nav>
  </header>



);


const Greeting = ({ currentUser, logout, login }) => (
  currentUser ? signedInGreeting(currentUser, logout) : signedOutGreeting(login)
);

export default Greeting;
