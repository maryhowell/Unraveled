import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';

import { deleteItem } from '../../util/cart_item_api_util'


class Checkout extends React.Component{

  constructor(props){
    super(props);

    this.submitOrder = this.submitOrder.bind(this);

    this.cart = this.props.cart_info.cart ? this.props.cart_info.cart : { cart_items: [] }
    this.costArray = [];
    this.total = 0;
    this.state = { submitOrderButton: "Submit Order" };
  }

  componentWillReceiveProps(nextProps){
    if(this.cart !== nextProps.cart_info.cart){
      this.cart = nextProps.cart_info.cart
    }
  }


  costList(){
    let priceQuantArray = this.cart.cart_items.map( cartItem => {
      return (cartItem.price)
    })

    this.total = 0;
    return(
      <section className="cart-cost">
        <ul className="item-cost">
          { this.cart.cart_items.map( cartItem => (
             <li key={cartItem.cart_item_id}>
             {cartItem.item_name}
             </li>
           ))
          }
          <article className="cart-total">
            <li>Total: {this.total}</li>
          </article>
        </ul>
        <button onClick={ this.submitOrder }>{ this.state.submitOrderButton }</button>
      </section>
    )
  }

  submitOrder(){
    this.setState({submitOrderButton: "Submitting..."})
    this.props.submitCart(this.props.current_user.cart_id)
      .then(cart => this.props.updateCurrentUser(this.props.current_user.id))
  }

  cartList(){
    this.costArray = []
    return(
      <section className="checkout-section">
        <ul className="checkout-list">
          { this.cart.cart_items.map( cartItem => {
            this.costArray.push( cartItem.price * cartItem.cart_item_quantity )
            return(
              <span key={ cartItem.cart_item_id }>
                <CartItem key={ cartItem.cart_item_id + Date.now() }
                  item={ cartItem }
                  quantity={ cartItem.cart_item_quantity }
                  getCart={ this.props.getCart }
                  current_user={ this.props.current_user }
                  cart_description={ true }/>
              </span>
            )
          }) }
        </ul>
        { this.costList() }
      </section>
    )
  }

  emptyCart(){
    this.costArray = [];
    return(
        <h1>Your cart is empty!</h1>
    )
  }

  render(){
    let content = this.cart.cart_items.length > 0 ? this.cartList() : this.emptyCart()
    return(
      <section className="checkout-page">
        { content }
      </section>
    )
  }

}

export default Checkout;

// componentWillMount(){
//   this.redirectIfNotSignedIn()
// }
//
// redirectIfNotSignedIn(){
//   if(!this.props.current_user){
//     hashHistory.push("/");
//   }
// }
