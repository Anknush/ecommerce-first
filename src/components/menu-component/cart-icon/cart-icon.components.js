import React from "react";
import { ReactComponent as ShoppingCart } from "../../../assets/shopping-bag.svg";
import "./car-icon.styles.scss";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../../redux/cart/cart.action";
import { selectItemCount } from "../../../redux/cart/cart-item.selector";
const ShoppingCarts = ({ toggleCartHidden, itemCount }) => (
  <div className="cart-icon" onClick={toggleCartHidden}>
    <ShoppingCart className="shopping-icon" />
    <span className="item-count">{itemCount}</span>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectItemCount(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCarts);
