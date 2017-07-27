import { connect } from 'react-redux';

import { selectReviews } from '../../reducers/selectors';
import { fetchReviews,deleteReview } from '../../actions/review_actions';
import ReviewIndexItem from './review_index_item';

const mapStateToProps = (state, ownProps) => ({
  reviews: selectReviews(state),
  patternId: ownProps.patternId,

});

const mapDispatchToProps = dispatch => ({
  fetchReviews: patternId => dispatch(fetchReviews(patternId)),
  deleteReview: id => dispatch(deleteReview(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewIndexItem);

  // currentUser: state.session.currentUser
