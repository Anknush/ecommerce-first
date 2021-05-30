import React from "react";
import { ReactComponent as Logo } from "../../../assets/crown.svg";
import { createStructuredSelector } from "reselect";
import { connect } from "react-redux";
import { auth } from "../../../firabase.utils";
import ShoppingCarts from "../cart-icon/cart-icon.components";
import CartDropdown from "../cart-dropdown/cart-dropdown.component";
import { selectUserNotify } from "../../../redux/user/user.selector";
import { selectCartHidden } from "../../../redux/cart/cart-item.selector";
import {
  HeaderContainer,
  LogoContainer,
  OptionsContainer,
  OptionLink,
} from "./header.styles.jsx";
const Header = ({ currentUser, hidden }) => (
  <HeaderContainer>
    <LogoContainer to="/">
      <Logo className="logo" />
    </LogoContainer>
    <OptionsContainer>
      <OptionLink to="/shop">SHOP</OptionLink>
      <OptionLink to="/contact">CONTACT</OptionLink>
      {currentUser ? (
        <OptionLink as="div" onClick={() => auth.signOut()}>
          SIGN OUT
        </OptionLink>
      ) : (
        <OptionLink to="/signin">SIGN IN</OptionLink>
      )}
      <ShoppingCarts />
    </OptionsContainer>
    {hidden ? null : <CartDropdown />}
  </HeaderContainer>
);
const reduxState = createStructuredSelector({
  currentUser: selectUserNotify,
  hidden: selectCartHidden,
});

export default connect(reduxState)(Header);
