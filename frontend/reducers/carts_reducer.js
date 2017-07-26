import { RECEIVE_CART, RECEIVE_PREV_CARTS } from '../actions/cart_actions';
import { merge } from 'lodash';

const CartReducer = (oldState = {}, action) => {
  Object.freeze(oldState);
  switch (action.type) {
    case RECEIVE_CART:
      return Object.assign({}, oldState, {cart: action.cart});
    case RECEIVE_PREV_CARTS:
      return Object.assign({}, oldState, {prevCarts: action.prevCarts});
    default:
      return oldState;
  }
};


export default CartReducer;
