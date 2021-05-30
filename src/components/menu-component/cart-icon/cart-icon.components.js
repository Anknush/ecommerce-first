import React from "react";
import { connect } from "react-redux";
import { toggleCartHidden } from "../../../redux/cart/cart.action";
import { selectItemCount } from "../../../redux/cart/cart-item.selector";
import { CartIconContainer, ImageIcon, ItemCountSpan } from "./cart-icon.styles.jsx";
const ShoppingCarts = ({ toggleCartHidden, itemCount }) => (
  <CartIconContainer onClick={toggleCartHidden}>
    <ImageIcon />
    <ItemCountSpan>{itemCount}</ItemCountSpan>
  </CartIconContainer>
);

const mapDispatchToProps = (dispatch) => ({
  toggleCartHidden: () => dispatch(toggleCartHidden()),
});

const mapStateToProps = (state) => ({
  itemCount: selectItemCount(state),
});
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCarts);
