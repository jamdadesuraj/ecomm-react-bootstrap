import React from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import "../style/Navbar.css";
import { useCartContext } from "../context/cartContext";
import { useAuth0 } from "@auth0/auth0-react";

const Navbar = () => {
  const { cart } = useCartContext();
  const { loginWithRedirect, logout, isAuthenticated, user } = useAuth0();
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark py-4">
        <div className="container-fluid">
          <NavLink className="navbar-brand text-white" to="/">
            LOGO
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link " aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Products
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">
                  <div className="position-relative">
                    <AiOutlineShoppingCart className="icon" />
                    <span className="position-absolute top-0 start-80 translate-middle badge rounded-pill bg-primary">
                      {cart.length}
                    </span>
                  </div>
                </NavLink>
              </li>
              {isAuthenticated && (
                <li className="nav-item">
                  <NavLink className="nav-link" to="">
                    {user.name}
                  </NavLink>
                </li>
              )}
              {isAuthenticated ? (
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    <button
                      className="btn btn-primary"
                      onClick={() =>
                        logout({
                          logoutParams: { returnTo: window.location.origin },
                        })
                      }
                    >
                      Log Out
                    </button>
                  </NavLink>
                </li>
              ) : (
                <li className="nav-item">
                  <NavLink className="nav-link" to="#">
                    <button
                      className="btn btn-primary"
                      onClick={() => loginWithRedirect()}
                    >
                      Log In
                    </button>
                  </NavLink>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
