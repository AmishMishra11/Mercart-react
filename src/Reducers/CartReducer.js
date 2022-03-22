export const cartReducer = (stateCart, actionCart) => {
  switch (actionCart.type) {
    case "ADD_WISHLIST":
      return { ...stateCart, myWishlist: actionCart.payload };

    default:
      return stateCart;
  }
};
