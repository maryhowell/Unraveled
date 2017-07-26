import * as CartApiUtil from '../util/cart_api_util.js';

export const RECEIVE_CART = 'RECEIVE_CART';
export const RECEIVE_PREV_CARTS = 'RECEIVE_PREV_CARTS'

export const getPrevCarts = () => dispatch => (
  CartApiUtil.getPrevCarts()
    .then(prevCarts => dispatch(receivePrevCarts(prevCarts)))
);

export const getCart = (id) => dispatch => (
  CartApiUtil.getCart(id).then(cart => dispatch(receiveCart(cart)))
);

export const submitCart = (id) => dispatch => (
  CartApiUtil.submitCart(id).then(cart => dispatch(receiveCart(cart)))
);

export const removeCart = () => dispatch => (
  dispatch(receiveCart(null))
);

export const receiveCart = (cart) => ({
  type: RECEIVE_CART,
  cart
});

export const receivePrevCarts = (prevCarts) => ({
  type: RECEIVE_PREV_CARTS,
  prevCarts
});
