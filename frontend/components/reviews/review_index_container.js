import { connect } from 'react-redux';

import { selectReviews } from '../../reducers/selectors';
import { fetchReviews,deleteReview } from '../../actions/review_actions';
import ReviewIndex from './review_index';

const mapStateToProps = (state, ownProps) => ({
  reviews: selectReviews(state),
  patternId: ownProps.patternId,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchReviews: patternId => dispatch(fetchReviews(patternId)),
  deleteReview: id => dispatch(deleteReview(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndex);
