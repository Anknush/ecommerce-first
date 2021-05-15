export const AddItemToCart = (cartItems, cartItemToAdd) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === cartItemToAdd.id
  );
  if (existingItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === cartItemToAdd.id
        ? {
            ...cartItem,
            quantity: cartItem.quantity + 1,
          }
        : cartItem
    );
  }
  return [
    ...cartItems,
    {
      ...cartItemToAdd,
      quantity: 1,
    },
  ];
};
export const RemoveItem = (cartItems, itemToTemove) => {
  const existingItem = cartItems.find(
    (cartItem) => cartItem.id === itemToTemove.id
  );
  if (existingItem.quantity === 1) {
    return cartItems.filter((cartItem) => cartItem.id !== itemToTemove.id);
  }
  return cartItems.map((cartItem) =>
    cartItem.id === itemToTemove.id
      ? { ...cartItem, quantity: cartItem.quantity - 1 }
      : cartItem
  );
};
