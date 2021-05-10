import { CardType } from "./card.type";

const Initial_stage = {
  hidden: true,
};
const CartReducer = (state = Initial_stage, action) => {
  switch (action.type) {
    case CardType.cardType:
      return {
        ...state,
        hidden: !state.hidden,
      };
    default:
      return state;
  }
};

export default CartReducer;
