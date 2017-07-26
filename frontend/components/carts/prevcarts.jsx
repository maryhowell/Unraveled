import React from 'react';
import { Link } from 'react-router';
import { hashHistory } from 'react-router';
import Order from './order';

class PrevCarts extends React.Component{

  constructor(props){
    super(props);

    this.prevCarts = this.props.cart_info.prevCarts ? this.props.cart_info.prevCarts : {};
  }

  componentWillReceiveProps(nextProps){
    if(this.prevCarts !== nextProps.cart_info.prevCarts){
      this.prevCarts = nextProps.cart_info.prevCarts;
    }
  }

  componentWillMount(){
    this.redirectIfNotSignedIn()
  }

  redirectIfNotSignedIn(){
    if(!this.props.current_user){
      hashHistory.push("/");
    } else {
      this.props.getPrevCarts();
    }
  }

  orders(carts){
    return (
      <div className="prevorder-page">
      { carts.map( cart => {
        if (cart.cart_items.length > 0){
          return (
            <div className="prevorder" key={ cart.cart_items[0].cart_item_id }>
              <Order key={ cart.cart_items[0].cart_item_id }
                cartItems={ cart.cart_items } />
              <section className="submit-date">
                Ordered: { cart.submit_date.slice(0,10) }
              </section>
            </div>
          )
        }
      })}
      </div>
    )
  }

  noPrevOrders(){
    return (
      <div className="prevorder-page">
          <h1>You haven't ordered anything yet!</h1>
      </div>
    )
  }

  render(){
    if ($.isEmptyObject(this.prevCarts) || this.prevCarts.prev_carts.length === 0) {
      return this.noPrevOrders();
    } else {
      return this.orders(this.prevCarts.prev_carts);
    }
  }

}

export default PrevCarts;
