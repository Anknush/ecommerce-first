import React from "react";
import "./checkOut.styles.scss";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import {
  selectCartItem,
  selectTotalPrice,
} from "../../../redux/cart/cart-item.selector";
import CheckoutItem from "../../../components/menu-component/checkout-item/checkout.item.component";
import StripeButton from "../../../components/menu-component/stripeButton/stripe-button.component";
const CheckOut = ({ cartItems, total }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    {cartItems.map((cartItem) => (
      <CheckoutItem key={cartItem.id} cartItem={cartItem} />
    ))}
    <div className="total">
      <span>TOTAL: ${total}</span>
    </div>
    <StripeButton price={total} />
  </div>
);

const mapStateToPRops = createStructuredSelector({
  cartItems: selectCartItem,
  total: selectTotalPrice,
});

export default connect(mapStateToPRops)(CheckOut);
