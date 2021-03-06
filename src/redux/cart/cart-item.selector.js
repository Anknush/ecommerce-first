import { createSelector } from "reselect";

const selectCart = (state) => state.cart;

export const selectCartHidden = createSelector(
  [selectCart],
  (cart) => cart.hidden
);
export const selectCartItem = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectItemCount = createSelector([selectCartItem], (cartItems) =>
  cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity,
    0
  )
);
export const selectTotalPrice = createSelector([selectCartItem], (cartItems) =>
  cartItems.reduce(
    (accumulator, cartItem) => accumulator + cartItem.quantity * cartItem.price,
    0
  )
);
