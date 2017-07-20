import React from 'react';
import { Link } from 'react-router';

const Masthead = () => {
  return(
    <header className='masthead'>
      <div className='masthead-image'>
        <img src={window.images.masthead} alt='UnRavled' />
      </div>
      <div>
        <Link  className='shop-link' to='/items' activeClassName='current'>Shop our Patterns</Link>
      </div>
    </header>
  );
};

export default Masthead;
