import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import ReviewFormContainer from '../reviews/review_form_container';
import ReviewIndexContainer from '../reviews/review_index_container';
class PatternItem extends Component {
  componentDidMount() {

    this.props.fetchPattern(this.props.match.params.patternId);

}

  render() {
    const { pattern } = this.props;

    if (pattern) {
      return (

        <div className='pattern-show'>
          <div className='pattern-show-top'>
              <a className='fa fa-long-arrow-left fa-2x back-button' aria-hidden="true" href='#/patterns' />
            <div className='pattern-show-image'>
              <img src={ pattern.image_url[0] } alt={ pattern.name } />
            </div>
            <div className='pattern-show-details'>
              <ul className='top-description'>
                <h2 className='pattern-show-name'>{ pattern.name }</h2>
                <li className='pattern-show-price'>{ `$${pattern.price}.00` } (PDF DOWNLOAD)</li>
                <li className='cart-button'> Add to Cart button</li>
              </ul>
              <div className='pattern-show-description'>{ pattern.short_description }</div>
            </div>
          </div>
          <div className='item-reviews'>
            <ReviewIndexContainer patternId={ pattern.id }/>
          </div>
          <ul className='cart-item-review'>
            <li>
              <ReviewFormContainer/>
            </li>
          </ul>
        </div>

      );
    } else {
      return (
        <div></div>
      );
    }
  }
}

export default PatternItem;

// import CartItemFormContainer from '../cart_items/cart_item_form_container';
  // <CartItemFormContainer />
