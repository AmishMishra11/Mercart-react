export const ProductReducer = (state, action) => {
  switch (action.type) {
    case "LOAD_PRODUCTS":
      return { ...state, loading: true };
    case "LOAD_PRODUCTS_SUCCESS":
      return {
        ...state,
        loading: false,
        product: action.payload,
      };
    case "LOAD_FAIL":
      return { ...state, loading: false, product: null };
    default:
      return state;
  }
};
