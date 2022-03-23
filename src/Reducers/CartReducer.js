export const cartReducer = (stateCart, actionCart) => {
  switch (actionCart.type) {
    case "ADD_WISHLIST":
      return { ...stateCart, myWishlist: actionCart.payload };

    case "ADD_CART":
      return {
        ...stateCart,
        myCart: actionCart.payload,
        quantity: stateCart.quantity + 1,
      };
    case "REMOVE_CART":
      return {
        ...stateCart,
        myCart: actionCart.payload,
        quantity: stateCart.quantity - 1,
      };

    default:
      return stateCart;
  }
};
