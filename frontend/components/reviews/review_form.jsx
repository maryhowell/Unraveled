import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { render } from 'react-dom';


class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: ''
    };

    this.handleRate = this.handleRate.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    this.setState({ description: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();

    const review = {
      item_id: this.props.itemId,
      description: this.state.description
    };

    this.props.createReview(review);
  }

  navigateToCartItem() {
    this.props.router.history(`/patterns/${this.props.patternId}`);
  }

  render() {
    return (

      <form onSubmit={ this.handleSubmit }>
        <ul>
          <li>Description</li>
          <li>
            <textarea
              className='review-description'
              value={ this.state.description }
              onChange={ this.handleChange }
            />
          </li>
          <li>
            <input
              className='submit-button'
              type='submit'
              value='Submit review'
            />
          </li>
        </ul>
      </form>
    );
  }
}

export default withRouter(ReviewForm);
