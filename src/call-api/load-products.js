import axios from "axios";

export const loadProducts = async (dispatch) => {
  try {
    dispatch({ type: "LOAD_PRODUCTS" });
    const { data } = await axios.get("/api/products");
    dispatch({
      type: "LOAD_PRODUCTS_SUCCESS",
      payload: data.products,
    });
  } catch (e) {
    dispatch({ type: "LOAD_FAIL" });
    console.log(e);
  }
};
