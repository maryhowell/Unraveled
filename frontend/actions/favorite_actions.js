import * as APIUtil from '../util/favorite_api_util';

export const RECEIVE_FAVORITES = 'RECEIVE_FAVORITES';
export const RECEIVE_FAVORITE = 'RECEIVE_FAVORITE';
export const REMOVE_FAVORITES = 'REMOVE_FAVORITES';

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

export const fetchFavorites = userId => dispatch => (
  APIUtil.fetchFavorites(userId).then(favorites => dispatch(receiveFavorites(favorites)))
);

export const fetchFavorite = userId => dispatch => (
  APIUtil.fetchFavorite(userId).then(favorite => dispatch(receiveFavorite(favorite)))
);

export const createFavorite = favorite => dispatch => (
  APIUtil.createFavorite(favorite).then(favorite=> dispatch(receiveFavorite(favorite)))
);

export const deleteFavorite = userId => dispatch => (
  APIUtil.deleteFavorite(userId).then(favorite => dispatch(removeFavorite(favorite)))
);
