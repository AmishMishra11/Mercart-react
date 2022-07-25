import axios from "axios";
export const loadWishlistApi = async (dispatchCart) => {
  const newToken = localStorage.getItem("token");
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
};
