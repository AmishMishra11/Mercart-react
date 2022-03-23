import { cartReducer } from "../Reducers/CartReducer";

import { loadWishlist } from "../Call-Apis/load-wishlist";
import { loadCart } from "../Call-Apis/load-cart";

const { createContext, useContext, useReducer, useEffect } = require("react");

const CartContext = createContext(null);

const useCart = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  useEffect(() => {
    loadWishlist();
    loadCart();
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
