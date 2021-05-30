import React from "react";
import { connect } from "react-redux";
import {
  AddItem,
  RemoveItem,
  RemoveItemsFromCheckout,
} from "../../../redux/cart/cart.action";
import { ChechOutItemContainer, ImageConatiner, QuantitySpan, RemoveButtonContainer, TextContainer } from "./checkout.item.styles";
const CheckoutItem = ({ cartItem, clearItem, addItem, removeItem }) => {
  const { name, quantity, price, imageUrl } = cartItem;
  return (
    <ChechOutItemContainer>
      <ImageConatiner>
        <img src={imageUrl} alt="item" />
      </ImageConatiner>
      <TextContainer>{name}</TextContainer>
      <QuantitySpan>
        <div onClick={() => removeItem(cartItem)}>
          &#10094;
        </div>
        <span className="value">{quantity}</span>
        <div onClick={() => addItem(cartItem)}>
          &#10095;
        </div>
      </QuantitySpan>
      <TextContainer>${price}</TextContainer>
      <RemoveButtonContainer onClick={() => clearItem(cartItem)}>
        {" "}
        &#10005;
      </RemoveButtonContainer>
    </ChechOutItemContainer>
  );
};
const mapDispatchToProps = (dispatch) => ({
  clearItem: (item) => dispatch(RemoveItem(item)),
  addItem: (item) => dispatch(AddItem(item)),
  removeItem: (item) => dispatch(RemoveItemsFromCheckout(item)),
});
export default connect(null, mapDispatchToProps)(CheckoutItem);
