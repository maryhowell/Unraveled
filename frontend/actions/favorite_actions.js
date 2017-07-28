import * as APIUtil from '../util/favorite_api_util';

export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const REMOVE_FAVORITES = 'REMOVE_FAVORITES';
export const REMOVE_FAVORITE = 'REMOVE_FAVORITE';

export const receiveFavorites = favorites => ({
  type: RECEIVE_FAVORITES,
  favorites
});

export const receiveFavorite = favorite => ({
  type: RECEIVE_FAVORITE,
  favorite
});

export const removeFavorite = favorite => ({
  type: REMOVE_FAVORITE,
  favorite
});

export const fetchFavorites = () => dispatch => (
  APIUtil.fetchFavorites().then(favorites => dispatch(receiveFavorites(favorites)))
);

export const fetchFavorite = patternId => dispatch => (
  APIUtil.fetchFavorite(patternId).then(favorite => dispatch(receiveFavorites(favorite)))
);

export const createFavorite = favorite => dispatch => (
  APIUtil.createFavorite(favorite).then(favorite=> dispatch(receiveFavorite(favorite)))
);

export const deleteFavorite = id => dispatch => (
  APIUtil.deleteFavorite(id).then(favorite => dispatch(removeFavorite(favorite)))
);
