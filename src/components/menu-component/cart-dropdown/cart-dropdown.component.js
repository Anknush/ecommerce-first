import React from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import CartItem from "../cart-item/cart-item.component";
import { toggleCartHidden } from "../../../redux/cart/cart.action";
import { CartDropdownButton, CartDropdownContainer, CartItemsContainer, EmptyMessageSpan } from "./cart-dropdown.styles.jsx";
const CartDropdown = ({ cartItems, history, dispatch }) => (
  <CartDropdownContainer>
    <CartItemsContainer>
      {cartItems.length ? (
        cartItems.map((cartItem) => (
          <CartItem key={cartItem.id} item={cartItem} />
        ))
      ) : (
        <EmptyMessageSpan>Your cart is Empty</EmptyMessageSpan>
      )}
    </CartItemsContainer>
    <CartDropdownButton
      onClick={() => {
        history.push("/checkout");
        dispatch(toggleCartHidden());
      }}
    >
      GO TO CHECKOUT
    </CartDropdownButton>
  </CartDropdownContainer>
);

const mapStateToProps = ({ cart: { cartItems } }) => ({
  cartItems,
});
export default withRouter(connect(mapStateToProps)(CartDropdown));
