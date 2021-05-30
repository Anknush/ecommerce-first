import React from "react";
import { CartImg, CartItemContainer, ItemDetailsContainer } from "./cart-item.styles";

const CartItem = ({ item: { name, imageUrl, price, quantity } }) => (
  <CartItemContainer>
    <CartImg src={imageUrl} alt="item" />
    <ItemDetailsContainer>
      <span className="name">{name}</span>
      <span className="price">
        {quantity}
        <span className="multiply">&#215;</span> ${price}
      </span>
    </ItemDetailsContainer>
  </CartItemContainer>
);
export default CartItem;
