import { CardType } from "./card.type";

export const toggleCartHidden = () => ({
  type: CardType.cardType,
});

export const AddItem = (items) => ({
  type: CardType.ADD_ITEMS,
  payload: items,
});
export const RemoveItem = (item) => ({
  type: CardType.REMOVE_ITEM_FROM_CART,
  payload: item,
});
export const RemoveItemsFromCheckout = (item) => ({
  type: CardType.REMOVE_ITEM,
  payload: item,
});
