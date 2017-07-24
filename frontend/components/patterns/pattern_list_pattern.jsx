import React from 'react';
import { Link } from 'react-router';

const PatternIndexPattern = ({ pattern }) => {
  return (
    <li className='pattern-index-pattern'>
      <ul>
        <li className='pattern-image'>
            <Link to={ `/patterns/${pattern.id}` }>
              <img src={ pattern.image_url[0] } alt={ pattern.name } />
            </Link>
        </li>
        <li className='pattern-name'>{ pattern.name }</li>
        <ul className='pattern-details'>
          <li className='pattern-seller'>{ `${pattern.seller_id.first_name} ${pattern.seller.last_name}` }</li>
          <li className='pattern-discription'>{ `${pattern.short_description}`}</li>
          <li className='pattern-price'>{ `$${pattern.price}` }</li>
        </ul>
      </ul>
    </li>
  );
};

export default PatternIndexPattern;
