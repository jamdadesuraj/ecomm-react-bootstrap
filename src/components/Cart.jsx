import React from "react";
import { useCartContext } from "../context/cartContext";
import CartItem from "./CartItem";
import { NavLink } from "react-router-dom";

const Cart = () => {
  const { cart, clearCart, subtotal_fee, shipping_fee } = useCartContext();

  return (
    <>
      <div className="container">
        {cart.length === 0 ? (
          <div
            className="d-flex justify-content-center align-items-center flex-column"
            style={{ height: "80vh" }}
          >
            <img
              src="https://mir-s3-cdn-cf.behance.net/projects/404/95974e121862329.Y3JvcCw5MjIsNzIxLDAsMTM5.png"
              alt="cart"
            />
            <NavLink to="/products">
              <button className="btn btn-primary">Continue Shopping</button>
            </NavLink>
          </div>
        ) : (
          <div
            className="row d-flex justify-content-center align-items-center"
            style={{ height: "80vh" }}
          >
            <div className="col-lg-8">
              <h2>My cart</h2>
              <table className="table table-bordered">
                <thead>
                  <tr>
                    <th scope="col">Name</th>
                    <th scope="col">Image</th>
                    <th scope="col">Price</th>
                    <th scope="col">Amount</th>
                    <th scope="col">Subtotal</th>
                    <th scope="col">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {cart.map((curElem) => {
                    return <CartItem key={curElem.id} {...curElem} />;
                  })}
                </tbody>
              </table>
              <div>
                <div className="row">
                  <div className="col-lg-10">
                    <NavLink to="/products">
                      <button className="btn btn-primary">
                        Continue Shopping
                      </button>
                    </NavLink>
                  </div>
                  <div className="col-lg-2">
                    <button className="btn btn-danger" onClick={clearCart}>
                      Clear Cart
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <h2>Subtotal</h2>
              <hr />
              <table className="table">
                <thead>
                  <tr>
                    <th scope="col">Subtotal</th>
                    <th scope="col">:</th>
                    <th scope="col">{subtotal_fee}</th>
                  </tr>
                  <tr>
                    <th scope="col">Shipping Fee</th>
                    <th scope="col">:</th>
                    <th scope="col">{shipping_fee}</th>
                  </tr>

                  <tr>
                    <th scope="col">total </th>
                    <th scope="col">:</th>
                    <th scope="col">{shipping_fee + subtotal_fee}</th>
                  </tr>
                </thead>
              </table>
              <button className="btn btn-success">Place Order Button</button>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default Cart;
