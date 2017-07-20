import * as APIUtil from '../util/pattern_api_util';

export const RECEIVE_PATTERNS = 'RECEIVE_PATTERNS';
export const RECEIVE_PATTERN = 'RECEIVE_PATTERN';

export const receivePatterns = patterns => ({
  type: RECEIVE_PATTERNS,
  patterns
});

export const receivePattern = pattern => ({
  type: RECEIVE_PATTERN,
  pattern
});

export const fetchPatterns = () => dispatch => (
  APIUtil.fetchPatterns().then(patterns => dispatch(receivePatterns(patterns)))
);

export const fetchPattern = id => dispatch => (
  APIUtil.fetchPattern(id).then(pattern => dispatch(receivePattern(pattern)))
);

export const fetchSearchedPatterns = searchWords => dispatch => (
  APIUtil.fetchSearchedPatterns(searchWords).then(patterns => dispatch(receivePatterns(patterns)))
);