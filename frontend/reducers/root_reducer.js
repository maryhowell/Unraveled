import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import PatternsReducer from './patterns_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  patterns: PatternsReducer
});

export default RootReducer;
