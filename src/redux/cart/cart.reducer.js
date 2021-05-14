import { CardType } from "./card.type";
import { AddItemToCart } from "./cart.utils";

const Initial_stage = {
  hidden: true,
  cartItems: [],
};
const CartReducer = (state = Initial_stage, action) => {
  switch (action.type) {
    case CardType.cardType:
      return {
        ...state,
        hidden: !state.hidden,
      };
    case CardType.ADD_ITEMS:
      return {
        ...state,
        cartItems: AddItemToCart(state.cartItems, action.payload),
      };
    default:
      return state;
  }
};

export default CartReducer;
