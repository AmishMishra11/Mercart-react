import axios from "axios";
export const removeCart = async (id, dispatchCart) => {
  const newToken = localStorage.getItem("token");

  try {
    const res = await axios({
      method: "DELETE",
      url: `/api/user/cart/${id}`,
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
