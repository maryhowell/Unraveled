import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { selectAllPatterns } from '../../reducers/selectors';


import PatternIndexPattern from './pattern_list_pattern';

class PatternIndex extends Component {


  componentWillMount() {
    // if (this.props.location.query.searchWords) {
    //   this.props.fetchSearchedPatterns(this.props.location.query.searchWords);
    // } else {
      this.props.fetchPatterns();
      if (this.props.currentUser) {
        this.props.fetchFavorites();
      }
    // }
  }

  // componentWillReceiveProps(nextProps) {
  //   // if (this.props.location.query.searchWords !== nextProps.location.query.searchWords) {
  //   //   if (nextProps.location.query.searchWords) {
  //   //     nextProps.fetchSearchedPatterns(nextProps.location.query.searchWords);
  //   //   } else {
  //       nextProps.fetchPatterns();
  //   //   }
  //   // }
  // }

  render() {
    if (this.props.loading === true || Object.keys(this.props.patterns).length === 0) {
      return <div>Loading</div>;
    }
    const { patterns, fewPatterns, favorites } = this.props;

    if (this.props.location.pathname === '/') {
      return (
        <section className='section-description-preview'>
          <div className='patterns-index'>
            <ul className='fewpatterns'>
              { fewPatterns.map(pattern => <PatternIndexPattern key={pattern.id} pattern={pattern} />)}
            </ul>
          </div>
        </section>
      );
    } else if (this.props.location.pathname.includes('/favorites')) {
      return (
        <section className='section-favorites-preview'>
          <div className='patterns-index'>
            <ul className='favorites-show'>
              { favorites.map(favorite => <PatternIndexPattern
                                          key={favorite.pattern_id}
                                          pattern={patterns[favorite.pattern_id]}
                                           />)}
            </ul>
          </div>
        </section>
      );
    } else {
      const patternValues = selectAllPatterns(patterns);
      return (
        <section className='section-description-all'>
          <div >
            <ul className='patterns-index'>
              { patternValues.map(pattern => <PatternIndexPattern key={pattern.id} pattern={pattern} />)}
            </ul>
          </div>
        </section>
      );
    }
  }
}

export default PatternIndex;
