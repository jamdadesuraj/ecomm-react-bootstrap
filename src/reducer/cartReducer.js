const cartReducer = (state, action) => {
  switch (action.type) {
    // *****************************************add to cart*****************************************************************

    case "ADD_TO_CART":
      let { id, amount, cartData, image } = action.payload;

      // *****************************************existing cartItems*****************************************************************

      let existingCartProducts = state.cart.find(
        (curElem) => curElem.id === id
      );

      if (existingCartProducts) {
        let updatedProducts = state.cart.map((curVal) => {
          if (curVal.id === id) {
            let newAmount = curVal.amount + amount;

            if (newAmount >= curVal.max) {
              newAmount = curVal.max;
            }

            return {
              ...curVal,
              amount: newAmount,
            };
          } else {
            return curVal;
          }
        });
        return {
          ...state,
          cart: updatedProducts,
        };
      } else {
        let cartProducts = {
          id,
          category: cartData.category,
          image,
          amount,
          price: cartData.price,
        };

        return {
          ...state,
          cart: [...state.cart, cartProducts],
        };
      }

    // *****************************************set decrement*****************************************************************

    case "SET_DECREMENT":
      let updatedProducts = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let decrementAmount = curElem.amount - 1;
          if (decrementAmount <= 1) {
            decrementAmount = 1;
          }
          return {
            ...curElem,
            amount: decrementAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedProducts,
      };

    // *****************************************set increment*****************************************************************

    case "SET_INCREMENT":
      let updatedIncrProducts = state.cart.map((curElem) => {
        if (curElem.id === action.payload) {
          let incrAmount = curElem.amount + 1;
          if (incrAmount >= curElem.max) {
            incrAmount = curElem.max;
          }
          return {
            ...curElem,
            amount: incrAmount,
          };
        } else {
          return curElem;
        }
      });
      return {
        ...state,
        cart: updatedIncrProducts,
      };

    // *****************************************remove items*****************************************************************

    case "REMOVE_ITEM":
      let updatedCart = state.cart.filter(
        (curElem) => curElem.id !== action.payload
      );
      return {
        ...state,
        cart: updatedCart,
      };

    // *****************************************clear cart*****************************************************************

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
      };

    // *****************************************subtotal price*****************************************************************

    case "SUBTOTAL_PRICE":
      let subtotalPrice = state.cart.reduce((initialVal, curElem) => {
        let { price, amount } = curElem;
        initialVal = initialVal + price * amount;
        return initialVal;
      }, 0);
      return {
        ...state,
        subtotal_fee: subtotalPrice,
      };

    default:
      return state;
  }
};

export default cartReducer;
