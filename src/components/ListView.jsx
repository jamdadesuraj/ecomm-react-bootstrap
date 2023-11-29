import React from "react";
import FormatPrice from "../helpers/FormatPrice";
import { NavLink } from "react-router-dom";

const ListView = ({ products }) => {
  return (
    <>
      <div className="container">
        <div className="row gy-5">
          {products.map((curVal) => {
            return (
              <div className="col-12" key={curVal.id}>
                <div className="card mb-3">
                  <div className="row g-0">
                    <div className="col-md-4">
                      <NavLink to={`/singleproduct/${curVal.id}`}>
                        <img
                          src={curVal.image}
                          className="img-fluid rounded-start"
                          alt={curVal.name}
                        />
                      </NavLink>

                      <NavLink
                        to={`/singleproduct/${curVal.id}`}
                        className="d-flex justify-content-center py-3"
                        style={{
                          textDecoration: "none",
                        }}
                      >
                        <button className="btn btn-warning">Read More</button>
                      </NavLink>
                    </div>
                    <div className="col-md-8">
                      <div className="card-body">
                        <h5 className="card-title">{curVal.name}</h5>
                        <p className="card-text">
                          {curVal.description.slice(0, 550)}...
                        </p>
                        <hr />
                        <div className="row">
                          <div className="col-4 text-primary fw-bold">
                            {/* <FormatPrice price={curVal.price} /> */}₹{" "}
                            {curVal.price}
                          </div>
                          <div className="col-4 text-danger fw-bold">
                            {curVal.category}
                          </div>
                          <div className="col-4 text-info fw-bold">
                            {curVal.company}
                          </div>
                        </div>
                      </div>
                    </div>
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

export default ListView;
