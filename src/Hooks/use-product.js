import { useReducer } from "react";
import { ProductReducer } from "../Reducers/ProductReducer";

export const useProduct = () => {
  const initialState = {
    loading: false,
    product: [],
  };

  const [state, dispatch] = useReducer(ProductReducer, initialState);
  const { loading, product } = state;

  return { loading, product, dispatch };
};
