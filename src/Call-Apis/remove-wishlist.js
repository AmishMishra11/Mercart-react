import axios from "axios";
import { toast } from "react-toastify";
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
      toast.success("Removed from Wihslist", {
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
