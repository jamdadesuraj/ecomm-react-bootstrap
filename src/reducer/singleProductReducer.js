const singleProductReducer = (state, action) => {
  switch (action.type) {
    // ****************************************SET_SINGLE_PRODUCT_LOADING*****************************************************************

    case "SET_SINGLE_PRODUCT_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };
    // ****************************************SET_SINGLE_PRODUCT_DATA*****************************************************************

    case "SET_SINGLE_PRODUCT_DATA":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };
    // ****************************************SET_PRODUCT_ERROR*****************************************************************

    case "SET_PRODUCT_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isSingleError: true,
      };

    default:
      return state;
  }
};

export default singleProductReducer;
