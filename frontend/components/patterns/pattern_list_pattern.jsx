import React from 'react';
import { Link } from 'react-router-dom';

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
      </ul>
    </li>
  );
};

export default PatternIndexPattern;
