import React from 'react';
import { Link } from 'react-router';

const deletebutton = ({ review, deleteReview, currentUser }) => {
  if (currentUser.id === review.user.id) {
     return <button className='deleteButton'
                    onClick={deleteReview}>X</button>
                };
}

const ReviewIndexItem = ({ review, deleteReview, currentUser }) => {
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
            { deletebutton }
        </ul>

      </div>
    </li>
  );
};

export default ReviewIndexItem;
