import { cartReducer } from "../Reducers/CartReducer";

import { loadCartApi } from "../Services/Cart/loadCartApi";
import { loadWishlistApi } from "../Services/Wishlist/loadWishlistApi";

const { createContext, useContext, useReducer, useEffect } = require("react");

const CartContext = createContext(null);

const useCart = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  useEffect(() => {
    loadWishlistApi();
    loadCartApi();
  }, []);

  const [stateCart, dispatchCart] = useReducer(cartReducer, {
    myWishlist: [],
    myCart: [],
    quantity: 0,
  });

  return (
    <CartContext.Provider value={{ stateCart, dispatchCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartContextProvider };
