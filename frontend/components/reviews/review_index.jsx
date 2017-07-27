import React, { Component } from 'react';
import { Link } from 'react-router';

import ReviewIndexItem from './review_index_item';

class ReviewIndex extends Component {
  constructor(props) {
    super(props);
  }



  render() {
    const { reviews, currentUser, deleteReview } = this.props;
    const reviewCount = reviews.length;

    return (
      <section className='reviews-section'>
        <ul className='reviews'>
          { reviews.reverse().map(review => <ReviewIndexItem key={review.id}
            review={review}
            deleteReview={deleteReview}
            currentUser={currentUser} />
          )}
        </ul>
      </section>
    );
  }
}

export default ReviewIndex;
