import React from 'react';
import { Link } from 'react-router-dom';

const Masthead = () => {
  return(
    <header className='masthead'>
      <div className='masthead-image'>

         <Link  className='shop-link' to='/patterns'>Shop our patterns</Link>

      </div>

    </header>
  );
};

export default Masthead;
// <button className='shop-link' to='/patterns'>Shop All Patterns</button>
//
// <div>
//
