import axios from "axios";
export const addWishlist = async (product, dispatchCart) => {
  const newToken = localStorage.getItem("token");

  try {
    const res = await axios({
      method: "POST",
      url: "/api/user/wishlist",
      data: { product: product },
      headers: {
        authorization: newToken,
      },
    });
    if (res.status === 201) {
      dispatchCart({ type: "ADD_WISHLIST", payload: res.data.wishlist });
    }
  } catch (e) {
    console.log("error occured: ", e);
  }
};
