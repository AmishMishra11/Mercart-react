import axios from "axios";

export const loadProducts = async (dispatchProduct) => {
  try {
    dispatchProduct({ type: "LOAD_PRODUCTS" });
    const { data } = await axios.get("/api/products");
    dispatchProduct({
      type: "LOAD_PRODUCTS_SUCCESS",
      payload: data.products,
    });
  } catch (e) {
    dispatchProduct({ type: "LOAD_FAIL" });
    console.log(e);
  }
};
