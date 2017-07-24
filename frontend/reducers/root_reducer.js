import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import PatternsReducer from './patterns_reducer';
import FetchingReducer from './fetching_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  patterns: PatternsReducer,
  fetching: FetchingReducer
});

export default RootReducer;
