import React from "react";
import FilterSection from "./FilterSection";
import Sort from "./Sort";
import ProductList from "./ProductList";

const Products = () => {
  return (
    <>
      <div className="container py-5">
        <div className="row">
          <div className="col-lg-4 col-12">
            <FilterSection />
          </div>
          <div className="col-lg-8 col-12">
            <div className="row">
              <div className="col-12">
                <Sort />
              </div>
              <div className="col-12">
                <ProductList />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Products;
