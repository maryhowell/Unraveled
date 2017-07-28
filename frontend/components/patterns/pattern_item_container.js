import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { fetchPattern } from '../../actions/pattern_actions';
import { selectPattern, selectFavorites } from '../../reducers/selectors';
import PatternShow from './pattern_item';
import { fetchReviews } from '../../actions/review_actions';
import { fetchFavorite, createFavorite, deleteFavorite } from '../../actions/favorite_actions';

const mapStateToProps = (state, { match }) => {
  const patternId = parseInt(match.params.patternId);
  const pattern = selectPattern(state, match.params.patternId);
  const favorites = state.favorites;
  const currentUser = state.session.currentUser;
  return { patternId, pattern, favorites, currentUser };
};

const mapDispatchToProps = dispatch => ({
  fetchPattern: id => dispatch(fetchPattern(id)),
  fetchReviews: patternId => dispatch(fetchReviews(patternId)),
  fetchFavorite: patternId => dispatch(fetchFavorite(patternId)),
  createFavorite: (favorite) => dispatch(createFavorite(favorite)),
  deleteFavorite: favoriteId => dispatch(deleteFavorite(favoriteId))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PatternShow));
