import axios from "axios";
import reducer from "../reducer/singleProductReducer";

const { createContext, useEffect, useReducer, useContext } = require("react");

const SingleProductContext = createContext();

// *****************************************API*************************************************************************************

const API = "https://fakestoreapi.com/products";

const initialState = {
  isSingleLoading: false,
  isSingleError: false,
  singleProduct: {},
};

const SingleProductProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // *****************************************get single products***********************************************************************

  const getSingleProducts = async (url) => {
    dispatch({ type: "SET_SINGLE_PRODUCT_LOADING" });
    try {
      const res = await axios.get(url);
      const singleProduct = await res.data;
      dispatch({ type: "SET_SINGLE_PRODUCT_DATA", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_PRODUCT_ERROR" });
    }
  };

  useEffect(() => {
    getSingleProducts(API);
  }, []);

  return (
    <SingleProductContext.Provider value={{ ...state, getSingleProducts }}>
      {children}
    </SingleProductContext.Provider>
  );
};

// *****************************************custom hook***********************************************************************

const useSingleProductContext = () => {
  return useContext(SingleProductContext);
};

export { SingleProductProvider, useSingleProductContext };
