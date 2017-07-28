import React from 'react';
import { Link } from 'react-router-dom';

const toggleFavorite = () => {
  if (this.props.user.favorites.includes(this.props.patternId)) {
    this.props.dislikePattern(this.props.pattern.pattern_id);
  } else {
    this.props.likePattern(this.props.pattern.pattern_id);
  }
};

const heart = () => {
  if (this.props.user.favorites.includes(this.props.patternId)) {
    return (
      <div className="heart-container">
        <div onClick={this.toggleFavorite} className="heart red">❤</div>
      </div>
    );
  } else {
    return (
      <div className="heart-container">
        <div onClick={this.toggleFavorite} className="heart">❤</div>
      </div>
    );
  }
};

const FavoriteIndexItem = ({ favorite, deleteFavorite, currentUser }) => {
    return (
      <section className='section-description-all'>
        <div >
          <ul className='patterns-index'>
            { patterns.map(pattern => <PatternIndexPattern key={pattern.id} pattern={pattern} />)}
          </ul>
        </div>
      </section>
    );
};

export default FavoriteIndexItem;
