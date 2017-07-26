import React from 'react';

class Order extends React.Component {
  constructor(props){
    super(props);
  }

  renderCartItem(cartItem){
    return (
      <li key={cartItem.id + cartItem.cart_item_id} className="cart_li">
          <article className="cart_item_image_container">
            <img src={ cartItem.image_url[0] } />
          </article>
          <p>{cartItem.item_name + " x" + cartItem.cart_item_quantity}</p>
      </li>
    )
  }

  render(){
    return (
      <ul className="prevorder-list">
        {this.props.cartItems.map( cartItem => {
          return this.renderCartItem(cartItem)
        })}
      </ul>
    )
  }

}

export default Order;
