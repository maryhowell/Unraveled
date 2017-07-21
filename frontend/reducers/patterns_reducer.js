import { RECEIVE_PATTERNS, RECEIVE_PATTERN } from '../actions/pattern_actions';
import merge from 'lodash/merge';

const PatternsReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_PATTERNS:
      return action.patterns;
    case RECEIVE_PATTERN:
      const newPattern = { [action.pattern.id]: action.pattern };
      return merge({}, state, newPattern);
    default: {
      return state;
    }
  }
};

export default PatternsReducer;
