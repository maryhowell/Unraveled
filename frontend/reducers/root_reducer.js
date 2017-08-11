import { combineReducers } from 'redux';

import SessionReducer from './session_reducer';
import PatternsReducer from './patterns_reducer';
import FetchingReducer from './fetching_reducer';
import ReviewsReducer from './reviews_reducer';
import FavoritesReducer from './favorites_reducer';

const RootReducer = combineReducers({
  session: SessionReducer,
  patterns: PatternsReducer,
  fetching: FetchingReducer,
  reviews: ReviewsReducer,
  favorites: FavoritesReducer
});

export default RootReducer;
