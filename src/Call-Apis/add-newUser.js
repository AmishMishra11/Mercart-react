import axios from "axios";
import { toast } from "react-toastify";
export const addNewUser = async (
  tempEmail,
  tempPassword,
  dispatchAuth,
  navigate,
  location
) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/auth/login",
      data: { email: tempEmail, password: tempPassword },
    });
    if (res.status === 200) {
      dispatchAuth({
        type: "GET_USER_DETAILS",
        payload: res.data.foundUser,
      });
      localStorage.setItem("token", res.data.encodedToken);

      const whereTo = location?.state?.from?.pathname;
      navigate(whereTo || "../products", { replace: true });

      toast.success("Login Success", {
        position: "bottom-center",
        autoClose: 2000,
      });
    }
  } catch (e) {
    console.log("error occured:  ", tempEmail, tempPassword, e);
    toast.error("Server Error", {
      position: "bottom-center",
      autoClose: 2000,
    });
  }
};
