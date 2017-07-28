import React from 'react';
import { Link } from 'react-router-dom';

import ReviewFormContainer from '../reviews/review_form_container';
import ReviewIndexContainer from '../reviews/review_index_container';
import FavoriteIndexContainer from '../favorites/favorite_index_container'


class PatternItem extends React.Component {
  constructor(props) {
    super(props);
    this.toggleFavorite = this.toggleFavorite.bind(this);
    this.hearted = false;
  }

  componentDidMount() {
    this.props.fetchPattern(this.props.match.params.patternId);
    this.props.fetchReviews(this.props.match.params.patternId);
    if (this.props.currentUser) {
      this.props.fetchFavorite(this.props.match.params.patternId);
    }
  }

  componentWillReceiveProps(nextProps) {
    if (Object.keys(nextProps.favorites).length > 0) {
      this.hearted = true;
    } else {
      this.hearted = false;
    }
  }

  toggleFavorite(){
    if (this.hearted) {
      this.dislikePattern(Object.keys(this.props.favorites)[0]);
    } else {
      this.likePattern(this.props.pattern.pattern_id);
    }
  }

  dislikePattern(favoriteId){
    this.props.deleteFavorite(favoriteId).then(() => this.props.fetchFavorite(this.props.match.params.patternId));
  }

  likePattern(){
    this.props.createFavorite({
      user_id: this.props.currentUser.id,
      pattern_id: this.props.match.params.patternId
    });

  }

   heart(){
    if (this.hearted) {
      return (
        <div className="heart-container">
          <div onClick={this.toggleFavorite} className="heart-red">❤</div>
        </div>
      );
    } else {
      return (
        <div className="heart-container">
          <div onClick={this.toggleFavorite} className="heart">❤</div>
        </div>
      );
    }
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
              <ul className='dislike-favorite'>
                <li>
                {this.props.currentUser ? this.heart() : ''}
                </li>
              </ul>
              <ul className='top-description'>
                <h2 className='pattern-show-name'>{ pattern.name }</h2>
                <li className='pattern-show-price'>{ `$${pattern.price}.00` } (PDF DOWNLOAD)</li>
                <li className='cart-button'> Add to Cart button</li>
              </ul>
              <div className='pattern-show-description'>{ pattern.short_description }</div>
            </div>
          </div>
          <div className='item-reviews'>
            <div className='review-header'>Reviews</div>
            <ReviewIndexContainer itemId={ pattern.id }/>
          </div>
          <ul className='item-review'>
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

// <button className=' fa fa-heart-o' name=' fa-favorites' aria-hidden='true'/>
    // <FavoriteIndexContainer/>
// import CartItemFormContainer from '../cart_items/cart_item_form_container';
  // <CartItemFormContainer />
