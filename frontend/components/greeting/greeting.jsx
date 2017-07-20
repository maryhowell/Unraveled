
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
        <span className="usergreeting" >Hi, {currentUser.email}!</span>
        <button className="signoutbutton" onClick={logout}>Sign Out</button>
      </div>




    </nav>
  </header>



);


const Greeting = ({ currentUser, logout }) => (
  currentUser ? signedInGreeting(currentUser, logout) : signedOutGreeting()
);

export default Greeting;
