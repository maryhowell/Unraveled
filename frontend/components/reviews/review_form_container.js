
import { connect } from 'react-redux';
import { fetchReview, createReview, updateReview, deleteReview } from '../../actions/review_actions';
import ReviewForm from './review_form';

const mapStateToProps = (state, ownProps) => ({
  currentUser: state.session.currentUser,
  reviewId: ownProps.reviewId,
  itemId: ownProps.itemId
});

const mapDispatchToProps = dispatch => ({
  fetchReview: id => dispatch(fetchReview(id)),
  createReview: review => dispatch(createReview(review)),
  updateReview: review => dispatch(update(review)),
  deleteReview: review => dispatch(deleteReview(review))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ReviewForm);
