import { CardType } from "./card.type";

export const toggleCartHidden = () => ({
  type: CardType.cardType,
});

export const AddItem = (items) => ({
  type: CardType.ADD_ITEMS,
  payload: items,
});
