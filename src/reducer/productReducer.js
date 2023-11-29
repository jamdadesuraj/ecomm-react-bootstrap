const productReducer = (state, action) => {
  switch (action.type) {
    // *****************************************SET_PRODUCT_LOADING*****************************************************************

    case "SET_PRODUCT_LOADING":
      return {
        ...state,
        isLoading: true,
      };
    // ****************************************SET_PRODUCT_DATA*****************************************************************

    case "SET_PRODUCT_DATA":
      const featureProductData = action.payload.filter((curVal) => {
        return curVal.category === "women's clothing";
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featureProductData,
      };
    // ****************************************SET_PRODUCT_ERROR*****************************************************************

    case "SET_PRODUCT_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    default:
      return state;
  }
};

export default productReducer;
