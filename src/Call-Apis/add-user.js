import axios from "axios";
import { toast } from "react-toastify";
export const addUser = async (
  tempFirstName,
  tempLastName,
  tempEmail,
  tempPassword,
  dispatchAuth,
  navigate
) => {
  try {
    const res = await axios({
      method: "POST",
      url: "/api/auth/signup",
      data: {
        firstName: tempFirstName,
        lastName: tempLastName,
        email: tempEmail,
        password: tempPassword,
      },
    });
    if (res.status === 201) {
      dispatchAuth({
        type: "GET_USER_DETAILS",
        payload: res.data.createdUser,
      });
      localStorage.setItem("token", res.data.encodedToken);
      navigate("/products");
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
