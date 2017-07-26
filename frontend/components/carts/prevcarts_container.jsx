import { connect } from 'react-redux';
import React from 'react';
import PrevCarts from './prevcarts';
import { getPrevCarts } from '../../actions/cart_actions';

const mapStateToProps = (state) => {
  return ({
    current_user: state.session.current_user,
    cart_info: state.cart_info
  })
}

const mapDispatchToProps = (dispatch) => {
  return ({
    getPrevCarts: () => dispatch(getPrevCarts()),
  })
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PrevCarts)
