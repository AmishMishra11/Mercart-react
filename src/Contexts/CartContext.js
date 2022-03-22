import { cartReducer } from "../Reducers/CartReducer";
import axios from "axios";
const { createContext, useContext, useReducer, useEffect } = require("react");

const CartContext = createContext(null);

const useCart = () => useContext(CartContext);

const CartContextProvider = ({ children }) => {
  const newToken = localStorage.getItem("token");
  useEffect(() => {
    (async () => {
      try {
        const res = await axios({
          method: "GET",
          url: "/api/user/wishlist",
          headers: {
            authorization: newToken,
          },
        });
        if (res.status === 200) {
          dispatchCart({ type: "ADD_WISHLIST", payload: res.data.wishlist });
        }
      } catch (e) {
        console.log("error occured: ", e);
      }
    })();
  }, []);

  const [stateCart, dispatchCart] = useReducer(cartReducer, {
    myWishlist: [],
    myCart: [],
  });

  return (
    <CartContext.Provider value={{ stateCart, dispatchCart }}>
      {children}
    </CartContext.Provider>
  );
};

export { useCart, CartContextProvider };
