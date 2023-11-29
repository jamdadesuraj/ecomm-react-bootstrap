import { createContext, useContext, useReducer, useEffect } from "react";
import reducer from "../reducer/cartReducer";

const CartContext = createContext();

// *****************************************localStorage get data*****************************************************************

const getLocalCartData = () => {
  let newCartData = localStorage.getItem("cartStorageData");
  return JSON.parse(newCartData);
};

const initialState = {
  // cart: [],
  cart: getLocalCartData(),
  subtotal_fee: "",
  shipping_fee: 500,
};

const CartContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  // *****************************************add to cart ***********************************************************************
  const AddToCart = (id, amount, cartData, image) => {
    dispatch({ type: "ADD_TO_CART", payload: { id, amount, cartData, image } });
  };

  // ***************************************** set decrement data *****************************************************************
  const SetDecrease = (id) => {
    dispatch({ type: "SET_DECREMENT", payload: id });
  };

  // *****************************************set increment data*****************************************************************

  const setIncrease = (id) => {
    dispatch({ type: "SET_INCREMENT", payload: id });
  };

  // *****************************************remove items************************************************************************

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };

  // *****************************************clear cart**************************************************************************

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  // *****************************************localStorage set data*****************************************************************

  useEffect(() => {
    dispatch({ type: "SUBTOTAL_PRICE" });
    localStorage.setItem("cartStorageData", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <CartContext.Provider
      value={{
        ...state,
        AddToCart,
        removeItem,
        clearCart,
        SetDecrease,
        setIncrease,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// ***************************************** custom hook **************************************************************************

const useCartContext = () => {
  return useContext(CartContext);
};
export { CartContextProvider, useCartContext };
