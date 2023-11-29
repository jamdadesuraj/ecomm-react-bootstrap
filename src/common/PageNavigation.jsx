import React from "react";
import { NavLink } from "react-router-dom";

const PageNavigation = ({ title }) => {
  return (
    <>
      <section className="bg-light py-2 ">
        <div className="container d-flex">
          <NavLink to="/">Home</NavLink>&nbsp; / &nbsp; <p>{title}</p>
        </div>
      </section>
    </>
  );
};

export default PageNavigation;
