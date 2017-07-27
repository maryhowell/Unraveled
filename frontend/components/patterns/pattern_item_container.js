import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchPattern } from '../../actions/pattern_actions';
import { selectPattern } from '../../reducers/selectors';
import PatternShow from './pattern_item';
import { fetchReviews } from '../../actions/review_actions';

const mapStateToProps = (state, { match }) => {
  const patternId = parseInt(match.params.patternId);
  const pattern = selectPattern(state, match.params.patternId);
  return { patternId, pattern };
};

const mapDispatchToProps = dispatch => ({
  fetchPattern: id => dispatch(fetchPattern(id)),
  fetchReviews: patternId => dispatch(fetchReviews(patternId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PatternShow));
