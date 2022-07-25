import axios from "axios";
export const loadCartApi = async (dispatchCart) => {
  const newToken = localStorage.getItem("token");
  try {
    const res = await axios({
      method: "GET",
      url: "/api/user/cart",
      headers: {
        authorization: newToken,
      },
    });
    if (res.status === 200) {
      dispatchCart({ type: "ADD_CART", payload: res.data.cart });
    }
  } catch (e) {
    console.log("error occured: ", e);
  }
};
