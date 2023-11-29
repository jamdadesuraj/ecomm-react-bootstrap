import React from "react";
import { NavLink } from "react-router-dom";

const Error = () => {
  return (
    <>
      <div className="container">
        <div className="row ">
          <div
            className="col-12 text-center d-flex justify-content-center align-items-center  flex-column"
            style={{ height: "100vh" }}
          >
            <h1>404 Page Not Found</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
              fuga nemo perferendis sequi optio blanditiis rerum quo quod labore
              magnam?
            </p>
            <NavLink to="/">
              <button className="btn btn-primary">Home</button>
            </NavLink>
          </div>
        </div>
      </div>
    </>
  );
};

export default Error;
