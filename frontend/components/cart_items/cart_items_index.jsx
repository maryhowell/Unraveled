import React, { Component } from 'react';
import { Link, withRouter } from 'react-router';

import CartItemsIndexItem from './cart_items_index_item';

class CartItemsIndex extends Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    this.props.fetchCartItems();
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateCart({id: this.props.cartItems[0].cart_id, purchased: true})
  }

  createNewCart() {
    this.props.createCart({ user_id: this.props.currentUser.id });
  }

  navigateToPurchasedItems() {
    this.props.router.history('/purchased_items');
  }

  render() {
    const cartItems = this.props.cartItems;
    let totalPrice = 0;
    cartItems.map(cartItem => totalPrice += cartItem.item_price);

    if (cartItems.length === 0) {
      return (
          <div className="outer-checkout-empty">
            <div className="inner-checkout-empty">
              <h3 className='empty-checkout-text'>Your cart is currently empty.</h3>
            </div>
          </div>
      );
    } else {
      return (
        <div className='cart-items-container'>
          <div className='cart-items-box'>
            <div>
              <ul className='cart-items'>
                {cartItems.map(cartItem => <CartItemsIndexItem key={ cartItem.cart_item_id }
                                                                cartItem={ cartItem }
                                                                deleteCartItem={ this.props.deleteCartItem }
                                                                fetchCartItems={ this.props.fetchCartItems } />
                )}
              </ul>
            </div>
            <div className='cart-details-flex-right'>
              <ul className='items-total'>
                <li>{`Item(s) total:`}</li>
                <li className='amount'>{`$${totalPrice}.00`}</li>
              </ul>
              <form onSubmit={this.handleSubmit}>
                <input className='purchase-button' type='submit' value='Make a purchase' />
              </form>
            </div>
          </div>
        </div>
      );
    }
  }
}

export default withRouter(CartItemsIndex);

// <Link className='return-shop' to='/patterns'>return to shop</Link>
//
