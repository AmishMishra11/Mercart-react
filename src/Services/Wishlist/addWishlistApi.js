import axios from "axios";
import { toast } from "react-toastify";
export const addWishlistApi = async (product, dispatchCart) => {
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
      toast.success("Added to Wihslist", {
        position: "bottom-center",
        autoClose: 2000,
      });
    }
  } catch (e) {
    console.log("error occured: ", e);
    toast.error("Server Error", {
      position: "bottom-center",
      autoClose: 2000,
    });
  }
};
