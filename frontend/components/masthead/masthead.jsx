import React from 'react';
import { Link } from 'react-router';

const Masthead = () => {
  return(
    <header className='masthead'>
      <div className='masthead-image'>

       <button className='shop-link' to='/'>Shop All Patterns</button>

      </div>

    </header>
  );
};

export default Masthead;

// <div>
//   <Link  className='shop-link' to='/patterns' activeClassName='current'>Shop our patterns</Link>
// </div>
