import React from "react";
import { NavLink } from "react-router-dom";
import "../style/heroSection.css";

const HeroSection = ({ myData }) => {
  const { name, btn, img } = myData;
  return (
    <>
      <div className="container">
        <div className="banner-section">
          <div className="row">
            <div className="col-lg-6 col-12">
              <h1>{name}</h1>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                quaerat et impedit iste earum tempore vitae accusantium dolor
                molestiae dolorem?
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                quaerat et impedit iste earum tempore vitae accusantium dolor
                molestiae dolorem?
              </p>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sint
                quaerat et impedit iste earum tempore vitae accusantium dolor
                molestiae dolorem?
              </p>
              <NavLink to="/products">
                <button className="btn btn-primary">{btn}</button>
              </NavLink>
            </div>
            <div className="col-lg-6 col-12">
              <figure>
                <img src={img} alt="banner" className="img-fluid" />
              </figure>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
