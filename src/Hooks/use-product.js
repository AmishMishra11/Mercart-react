import { useReducer } from "react";
import { ProductReducer } from "../Reducers/ProductReducer";

export const useProduct = () => {
  const initialState = {
    loading: false,
    product: [],
  };

  const [stateProduct, dispatchProduct] = useReducer(
    ProductReducer,
    initialState
  );
  const { loading, product } = stateProduct;

  return { loading, product, dispatchProduct };
};
