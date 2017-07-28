import React from 'react';
import { Link } from 'react-router-dom';
import PatternListContainer from '../patterns/pattern_list_container';
const Masthead = () => {
  return(
    <header className='masthead'>
      <div className='masthead-image'>
          <p className='masthead-blurb'>Sophisticated knitwear design for the modern handknitter.</p>
         <Link  className='shop-link' to='/patterns'>Shop our patterns</Link>

      </div>
      <PatternListContainer/>
    </header>
  );
};

export default Masthead;
// <button className='shop-link' to='/patterns'>Shop All Patterns</button>
//
// <div>
//
