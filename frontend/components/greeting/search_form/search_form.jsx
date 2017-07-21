import { connect } from 'react-redux';

import { selectAllPatterns } from '../../reducers/selectors';
import { fetchSearchedPatterns } from '../../actions/pattern_actions';
import SearchForm from './search_form';

const mapStateToProps = state => ({
  patterns: selectAllPatterns(state)
});

const mapDispatchToProps = dispatch => ({
  fetchSearchedPatterns: searchWords => dispatch(fetchSearchedPatterns(searchWords))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SearchForm);
