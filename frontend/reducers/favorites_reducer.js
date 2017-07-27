import { RECEIVE_FAVORITES, RECEIVE_FAVORITE, REMOVE_FAVORITE } from '../actions/favorite_actions';
import merge from 'lodash/merge';

const FavoritesReducer = (state = {}, action) => {
  Object.freeze(state);

  switch(action.type) {
    case RECEIVE_FAVORITES:
      return action.favorites;
    case RECEIVE_FAVORITE:
      const newFavorite = { [action.favorite.id]: action.favorite };
      return merge({}, state, newFavorite);
    case REMOVE_FAVORITE:
      const nextState = merge({}, state);
      delete nextState[action.favorite.id];
      return nextState;
    default:
      return state;
  }
};

export default FavoritesReducer;
