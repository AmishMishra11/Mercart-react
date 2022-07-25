import axios from "axios";
export const quantityCartApi = async (id, dispatchCart, quantityIncDec) => {
  const newToken = localStorage.getItem("token");
  try {
    const res = await axios({
      method: "POST",
      url: `/api/user/cart/${id}`,

      data: {
        action: {
          type: quantityIncDec,
        },
      },

      headers: {
        authorization: newToken,
      },
    });

    if (res.status === 200) {
      dispatchCart({ type: "REMOVE_CART", payload: res.data.cart });
    }
  } catch (e) {
    console.log("error occured: ", e);
  }
};
