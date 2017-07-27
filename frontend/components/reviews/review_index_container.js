import { connect } from 'react-redux';

import { selectReviews } from '../../reducers/selectors';
import { fetchReviews } from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mapStateToProps = (state, ownProps) => ({
  reviews: selectReviews(state),
  patternId: ownProps.patternId
});

const mapDispatchToProps = dispatch => ({
  fetchReviews: patternId => dispatch(fetchReviews(patternId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
