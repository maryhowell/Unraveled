import { connect } from 'react-redux';
import PatternList from './pattern_list';
import { withRouter } from 'react-router';
// Actions
import { selectAllPatterns, selectFewPatterns } from '../../reducers/selectors';
import { fetchPatterns, fetchPattern } from '../../actions/pattern_actions';


const mapStateToProps = state => ({
  patterns: selectAllPatterns(state),
  fewPatterns: selectFewPatterns(state),
  loading: state.fetching
});

const mapDispatchToProps = dispatch => ({
  fetchPatterns: () => dispatch(fetchPatterns()),
  fetchSearchedPatterns: searchWords => dispatch(fetchSearchedPatterns(searchWords))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PatternList));
