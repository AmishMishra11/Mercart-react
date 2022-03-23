import axios from "axios";
export const addCart = async (product, dispatchCart) => {
  const newToken = localStorage.getItem("token");

  try {
    const res = await axios({
      method: "POST",
      url: "/api/user/cart",
      data: { product: product },
      headers: {
        authorization: newToken,
      },
    });
    if (res.status === 201) {
      dispatchCart({ type: "ADD_CART", payload: res.data.cart });
    }
  } catch (e) {
    console.log("error occured: ", e);
  }
};
