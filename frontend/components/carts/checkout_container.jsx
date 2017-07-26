import { connect } from 'react-redux';
import React from 'react';
import Checkout from './checkout';
import { getCart, submitCart } from '../../actions/cart_actions';
import { updateCurrentUser } from '../../actions/session_actions';

const mapStateToProps = (state) => {
  return ({
    current_user: state.session.current_user,
    cart_info: state.cart_info
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getCart: (id) => dispatch(getCart(id)),
    submitCart: (id) => dispatch(submitCart(id)),
    updateCurrentUser: (id) => dispatch(updateCurrentUser(id))
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Checkout)
