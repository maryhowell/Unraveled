import { connect } from 'react-redux';
import PatternList from './pattern_list';
import { withRouter } from 'react-router';
// Actions
import { selectAllPatterns } from '../../reducers/selectors';
import { fetchPatterns, fetchPattern } from '../../actions/pattern_actions';


const mapStateToProps = state => ({
  patterns: selectAllPatterns(state),
  loading: state.fetching,
});

const mapDispatchToProps = dispatch => ({
  fetchPatterns: () => dispatch(fetchPatterns()),
  fetchSearchedPatterns: searchWords => dispatch(fetchSearchedPatterns(searchWords))
});

export default withRouter(connect(
  mapStateToProps,
  mapDispatchToProps
)(PatternList));
