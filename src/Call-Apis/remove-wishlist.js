import axios from "axios";
export const removeWishlist = async (id, dispatchCart) => {
  const newToken = localStorage.getItem("token");

  try {
    const res = await axios({
      method: "DELETE",
      url: `/api/user/wishlist/${id}`,
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
};
