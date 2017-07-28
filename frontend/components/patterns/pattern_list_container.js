import { connect } from 'react-redux';
import PatternList from './pattern_list';
import { withRouter } from 'react-router';
// Actions
import { selectAllPatterns, selectFewPatterns } from '../../reducers/selectors';
import { fetchPatterns, fetchPattern } from '../../actions/pattern_actions';
import { fetchFavorites } from '../../actions/favorite_actions';


const mapStateToProps = state => ({
  patterns: state.patterns,
  fewPatterns: selectFewPatterns(state),
  favorites: Object.values(state.favorites),
  loading: state.fetching,
  currentUser: state.session.currentUser
});

const mapDispatchToProps = dispatch => ({
  fetchPatterns: () => dispatch(fetchPatterns()),
  fetchSearchedPatterns: searchWords => dispatch(fetchSearchedPatterns(searchWords)),
  fetchFavorites: () => dispatch(fetchFavorites())
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PatternList));
