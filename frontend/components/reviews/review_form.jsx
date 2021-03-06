import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import { render } from 'react-dom';


class ReviewForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleChange(e) {
    this.setState({ description: e.target.value });
  }

  handleSubmit(e) {
    e.preventDefault();
    const review = {
      item_id: this.props.match.params.patternId,
      description: this.state.description
    };

    this.props.createReview(review).then(()=> this.setState({ description: "" }));
  }

   formSignedIn(currentUser){
    if( currentUser) {
      return (
        <form onSubmit={ this.handleSubmit }>
          <ul className='rewiew-form-container'>
            <li>Leave A Review</li>
            <li>
              <textarea
                className='review-description' value={ this.state.description } onChange={ this.handleChange }/>
            </li>
            <li>
              <input className='submit-button' type='submit' value='Submit review'/>
            </li>
          </ul>
        </form>
      );
    }else{
        return (
         <ul className='rewiew-form-container'>
          <li>Please Sign In to Leave A Review</li>
        </ul>
      );
    }
  }

  render() {
    return (
      <div>
      { this.formSignedIn(this.props.currentUser) }
      </div>
    );
  }
}

export default withRouter(ReviewForm);
