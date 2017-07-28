export const fetchFavorites = () => {
  return $.ajax({
    method: 'GET',
    url: `api/favorites`
  });
};

export const fetchFavorite = patternId => {
  return $.ajax({
    method: 'GET',
    url: `api/favorites/`,
    data: { pattern_id: patternId }
  });
};

export const createFavorite = favorite => {
  return $.ajax({
    method: 'POST',
    url: 'api/favorites',
    data: { favorite }
  });
};

export const deleteFavorite = id => {
  return $.ajax({
    method: 'DELETE',
    url: `api/favorites/${id}`
  });
};
