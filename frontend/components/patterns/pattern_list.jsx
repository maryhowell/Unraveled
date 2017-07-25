import React, { Component } from 'react';
import { Link } from 'react-router-dom';


import PatternIndexPattern from './pattern_list_pattern';

class PatternIndex extends Component {


  componentWillMount() {
    // if (this.props.location.query.searchWords) {
    //   this.props.fetchSearchedPatterns(this.props.location.query.searchWords);
    // } else {
      this.props.fetchPatterns();
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
    if (this.props.loading === true || !this.props.patterns) {
      return <div>Loading</div>;
    }

    const { patterns, fewPatterns } = this.props;

    if (this.props.location.pathname === '/') {
      return (
        <section className='section-description-preview'>
          <div className='patterns-index'>
            <ul>
              { fewPatterns.map(pattern => <PatternIndexPattern key={pattern.id} pattern={pattern} />)}
            </ul>
          </div>
        </section>
      );
    } else {
      return (
        <section className='section-description-all'>
          <div >
            <ul className='patterns-index'>
              { patterns.map(pattern => <PatternIndexPattern key={pattern.id} pattern={pattern} />)}
            </ul>
          </div>
        </section>
      );
    }
  }
}

export default PatternIndex;
