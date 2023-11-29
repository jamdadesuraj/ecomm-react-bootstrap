import React from "react";
import "../style/colors.css";
import { AiOutlineCheck } from "react-icons/ai";
import { useState } from "react";

const Colors = ({ product }) => {
  const { id, colors } = product;
  const [color, setColor] = useState(colors[0]);
  return (
    <>
      <section>
        <h3>Select a color</h3>
        {colors.map((curColor, index) => {
          return (
            <div
              className="swatch"
              key={index}
              style={{ backgroundColor: curColor }}
            >
              <input type="radio" name="" id={id} />
              <label for={id} onClick={() => setColor(curColor)}>
                {color === curColor ? (
                  <AiOutlineCheck className="icon" />
                ) : null}
              </label>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default Colors;
