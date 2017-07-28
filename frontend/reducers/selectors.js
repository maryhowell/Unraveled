import { values } from 'lodash';

export const selectAllPatterns = patterns => values(patterns);
export const selectFewPatterns = ({ patterns }) => values(patterns).reverse().slice(0, 4);

export const selectPattern = ({ patterns }, id) => {
  const pattern = patterns[id]
  return pattern;
}

export const selectCartItems = ({ cartItems }) => values(cartItems);
export const selectCarts = ({ carts }) => values(carts);

export const selectReviews = ({ reviews }) => values(reviews);
export const selectReview = ({ reviews }, id) => {
  return reviews[id];
}

export const selectFavorites = ({ favorites }) => values(favorites);
