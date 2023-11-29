import React from "react";
import { BsTruck } from "react-icons/bs";

const Services = () => {
  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-lg-4">
            <div className="card bg-light p-5 d-flex justify-content-center align-items-center">
              <BsTruck className="icon mb-3" />
              <h4>Super Fast And Free Delivery</h4>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row gy-4">
              <div className="col-lg-12">
                <div className="card bg-light p-5 d-flex justify-content-center align-items-center">
                  <BsTruck className="icon mb-3" />
                  <h4>Super Fast And Free Delivery</h4>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="card bg-light p-5 d-flex justify-content-center align-items-center">
                  <BsTruck className="icon mb-3" />
                  <h4>Super Fast And Free Delivery</h4>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="card bg-light p-5 d-flex justify-content-center align-items-center">
              <BsTruck className="icon mb-3" />
              <h4>Super Fast And Free Delivery</h4>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
