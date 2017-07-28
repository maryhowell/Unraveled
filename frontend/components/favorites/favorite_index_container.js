import { connect } from 'react-redux';

import { selectFavorites } from '../../reducers/selectors';
import { fetchFavorites, deleteFavorite } from '../../actions/favorite_actions';
import FavoriteIndex from './favorite_index';

const mapStateToProps = (state, ownProps) => ({
  favorites: selectFavorites(state),
  patternId: ownProps.patternId,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchFavorites: userId => dispatch(fetchFavorites(userId)),
  deleteFavorite: id => dispatch(deleteFavorite(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FavoriteIndex);
