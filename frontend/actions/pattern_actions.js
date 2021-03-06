import * as APIUtil from '../util/pattern_api_util';
import { START_FETCHING } from '../reducers/fetching_reducer';

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

export const startFetchingPatterns = () => ({
  type: START_FETCHING,
});


export const fetchPatterns = () => dispatch => {
  dispatch(startFetchingPatterns());
  return APIUtil.fetchPatterns().then(patterns => (
    dispatch(receivePatterns(patterns)))
  );
};

export const fetchPattern = id => dispatch => (
  APIUtil.fetchOnePattern(id).then(pattern => {

    return dispatch(receivePattern(pattern));
  })
);
