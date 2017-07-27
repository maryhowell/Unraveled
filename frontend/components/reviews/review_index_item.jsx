import React from 'react';
import { Link } from 'react-router';

const ReviewIndexItem = ({ review }) => {
  return (
    <li>
      <div className='review'>
        <ul className='reviewer'>
          <li className='reviewed-by'>Reviewed by</li>
          <li>{ `${review.user.email}`}</li>
        </ul>
        <ul className='reviewer-review'>
          <li>{ review.description }</li>
        </ul>
        <ul className='reviewer-review-date'>
          <li>{ review.review_date.slice(0, 10) }</li>
        </ul>
      </div>
    </li>
  );
};

export default ReviewIndexItem;
