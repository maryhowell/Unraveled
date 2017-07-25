import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
            <div className='pattern-show-image'>
              <img src={ pattern.image_url[0] } alt={ pattern.name } />
            </div>
            <div className='pattern-show-details'>
              <ul>
                <li className='pattern-show-name'>{ pattern.name }</li>
                <li className='pattern-show-price'>{ `$${pattern.price}.00` } (PDF DOWNLOAD)</li>
              </ul>
              <div className='pattern-show-description'>{ pattern.short_description }</div>
            </div>
          </div>
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


// <li className='pattern-show-seller'>{ `${pattern.seller.first_name} ${pattern.seller.last_name}` }</li>
