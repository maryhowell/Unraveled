import { connect } from 'react-redux';

import { selectPattern } from '../../reducers/selectors';
import PatternShow from './pattern_item';

const mapStateToProps = (state, { params }) => {
  const patternId = parseInt(params.patternId);
  const pattern = selectPattern(state, patternId);
  return { pattern };
};

const mapDispatchToProps = dispatch => ({
  fetchPattern: id => dispatch(fetchPattern(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PatternShow);
