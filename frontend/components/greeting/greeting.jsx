
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
          <button className="demobutton" onClick={ () => login({user:{ email: 'Demo@gmail.com', password: '12345678'} })}>Demo</button>
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
      <Link className="allpatternsbutton" to="/patterns">
      Shop All Patterns
      </Link>

      <nav className='signout-nav'>
     <ul>
       <li className='user'>
         <ul>

           <li>{`${currentUser.email}`}</li>
         </ul>
       </li>
       <Link className='allfavoritesbutton' to={`/user/${currentUser.id}/favorites`}>
         Favorites
       </Link>
       <li>
         <Link to='/'>
           <button className='signoutbutton' onClick={ logout }>SignOut</button>
         </Link>
       </li>
       <li>
         <Link className='cart-link' to='/cart'>
           <ul className='cart'>
             <li>
               <i className='fa fa-shopping-cart' name='fa-shopping-cart' aria-hidden='true' />
             </li>
             <li>Cart</li>
           </ul>
         </Link>
       </li>

     </ul>
   </nav>
    </nav>
  </header>



);


const Greeting = ({ currentUser, logout, login }) => (
  currentUser ? signedInGreeting(currentUser, logout) : signedOutGreeting(login)
);

export default Greeting;

// <Link className="allfavoritesbutton" to=`/user/${currentUser.id}/favorites`>
// Favorites
// </Link>
