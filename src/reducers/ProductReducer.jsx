const ProductReducer = (state, action) => {
  if (action.type === "SET_API_DATA") {
    return {
      ...state,
      products: action.payload,
    };
  }
};

export default ProductReducer;
