import React from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
import { FaTrash } from "react-icons/fa";
import { useCartContext } from "../context/cartContext";

const CartItem = ({ id, category, image, price, amount }) => {
  const { removeItem, SetDecrease, setIncrease } = useCartContext();

  return (
    <>
      <tr>
        <td>{category}</td>
        <td>
          <img src={image} alt={category} style={{ width: "50px" }} />
        </td>
        <td>{price}</td>
        <td>
          <div className="qty">
            <fieldset>
              <button
                type="button"
                className="qty-btn"
                onClick={() => SetDecrease(id)}
              >
                <AiOutlineMinus />
              </button>

              <input type="text" id="three-max" value={amount} readOnly />
              <button
                type="button"
                className="qty-btn"
                onClick={() => setIncrease(id)}
              >
                <AiOutlinePlus />
              </button>
            </fieldset>
          </div>
        </td>
        <td>{price * amount}</td>
        <td>
          <button className="btn btn-danger" onClick={() => removeItem(id)}>
            <FaTrash />
          </button>
        </td>
      </tr>
    </>
  );
};

export default CartItem;
