import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../helpers/FormatPrice";

const GridView = ({ products }) => {
  return (
    <>
      <div className="container">
        <div className="row gy-5">
          {products.map((curVal) => {
            return (
              <div className="col-lg-4 col-12" key={curVal.id}>
                <div
                  className="card"
                  style={{
                    width: "100%",
                    height: "400px",
                  }}
                >
                  <NavLink to={`/singleproduct/${curVal.id}`}>
                    <img
                      src={curVal.image}
                      className="card-img-top"
                      alt={curVal.name}
                      style={{
                        width: "150px",
                        height: "150px",
                        padding: "1rem",
                      }}
                    />
                  </NavLink>
                  <div className="card-body">
                    <div className="row">
                      <div className="col-6">
                        <h6 className="card-title">{curVal.name}</h6>
                      </div>

                      <div className="col-6">
                        {/* <FormatPrice price={curVal.price} /> */}₹{" "}
                        {curVal.price}
                      </div>
                    </div>
                    <h6 className="card-title">
                      Category :- {curVal.category}
                    </h6>
                    <hr />
                    <p className="card-text">
                      {curVal.description.slice(0, 80)}...
                    </p>
                    <NavLink
                      to={`/singleproduct/${curVal.id}`}
                      className="btn btn-primary"
                    >
                      Read More
                    </NavLink>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default GridView;
