import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import PatternsReducer from './patterns_reducer';
import FetchingReducer from './fetching_reducer';
import CartReducer from './carts_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  patterns: PatternsReducer,
  fetching: FetchingReducer,
  cart_info: CartReducer
});

export default RootReducer;
