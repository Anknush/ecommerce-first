import React from "react";
import { ReactComponent as ShoppingCart } from "../../../assets/shopping-bag.svg";
import "./car-icon.styles.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../../redux/cart/cart.action";
const ShoppingCarts = ({ toggleCartHidden }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingCart className="shopping-icon" />
    <span className="item-count">0</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});
export default connect(null, mapDispatchToProps)(ShoppingCarts);
