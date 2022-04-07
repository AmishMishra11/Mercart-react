import axios from "axios";
import { toast } from "react-toastify";
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

      toast.success("Added to Cart", {
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
