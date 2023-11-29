import { useState } from "react";
import "../style/AddToCart.css";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { useCartContext } from "../context/cartContext";

const AddToCart = ({ cartData }) => {
  const { id, image } = cartData;
  const { AddToCart } = useCartContext();

  // const [color, setColor] = useState(colors[0]);
  const [amount, setAmount] = useState(1);

  const SetDecrease = () => {
    amount > 1 ? setAmount(amount - 1) : setAmount(1);
  };

  const setIncrease = () => {
    // amount < stock ? setAmount(amount + 1) : setAmount(stock);
    amount < 10 ? setAmount(amount + 1) : setAmount(0);
  };

  return (
    <>
      <div className="qty">
        <fieldset>
          <button type="button" className="qty-btn" onClick={setIncrease}>
            <AiOutlinePlus />
          </button>
          <input type="text" id="three-max" value={amount} readOnly />
          <button type="button" className="qty-btn" onClick={SetDecrease}>
            <AiOutlineMinus />
          </button>
        </fieldset>
      </div>

      <NavLink
        to="/cart"
        className="btn btn-danger mt-5 mb-5 border-0"
        onClick={() => AddToCart(id, amount, cartData, image)}
      >
        Add To Cart
      </NavLink>
    </>
  );
};

export default AddToCart;
