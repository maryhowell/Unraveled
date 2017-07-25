import React from 'react';
import { Link } from 'react-router-dom';



const PatternIndexPattern = ({ pattern }) => {
  return (

        <li className='pattern-image'>
            <Link to={ `/patterns/${pattern.id}` }>
              <img className="image" src={ pattern.image_url[0] } alt={ pattern.name } />
            </Link>
            <p className='pattern-name'>{ pattern.name }</p>
        </li>
  );
};

export default PatternIndexPattern;
