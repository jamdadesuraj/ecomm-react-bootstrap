import React from "react";
import { useFilterContext } from "../context/filterContext";

const FilterSection = () => {
  const {
    searchFilters: { text, minPrice, maxPrice, price },
    updateFilterValue,
    allProducts,
    clearFilters,
  } = useFilterContext();

  const getUniqueData = (data, arr) => {
    let newVal = data.map((curElm) => {
      return curElm.category;
    });

    if (arr === "colors") {
      return (newVal = ["All", ...new Set([].concat(...newVal))]);
    } else {
      return (newVal = ["All", ...new Set(newVal)]);
    }
  };

  const categoryData = getUniqueData(allProducts, "category");
  const companyData = getUniqueData(allProducts, "company");
  const colorsData = getUniqueData(allProducts, "colors");

  return (
    <>
      <div className="container">
        {/* search section */}
        <form onSubmit={(e) => e.preventDefault()}>
          <div className="input-group mb-3">
            <input
              type="search"
              name="text"
              value={text}
              onChange={updateFilterValue}
              className="form-control"
              placeholder="Search Here..."
            />
          </div>
        </form>
        {/* category section */}
        <h5>Category</h5>
        <hr />
        {categoryData.map((curElm, index) => {
          return (
            <button
              key={index}
              className="btn btn-light mx-3 w-100 mb-4"
              name="category"
              value={curElm}
              onClick={updateFilterValue}
            >
              {curElm}
            </button>
          );
        })}
        {/* company section */}
        <h5 className="mb-5">Company</h5>
        <hr />
        <select
          name="category"
          id=""
          className="form-control form-select mb-5"
          onClick={updateFilterValue}
        >
          {companyData.map((curElm, index) => {
            return (
              <option key={index} value={curElm} name="category">
                {curElm}
              </option>
            );
          })}
        </select>
        {/* color section */}
        <div className="mb-4">
          <h5 className="mb-5">Colors</h5>
          <hr />
          {colorsData.map((curElm, index) => {
            return (
              <button
                key={index}
                type="button"
                className="btn btn-light mb-5"
                style={{ backgroundColor: curElm }}
                name="color"
                value={curElm}
                onClick={updateFilterValue}
              >
                {curElm}
              </button>
            );
          })}
          {/* price section */}
          <h5 className="mb-5">Price</h5>
          <hr />
          Rs. {price}
          <br />
          <input
            type="range"
            max={maxPrice}
            min={minPrice}
            value={price}
            name="price"
            step={10}
            onChange={updateFilterValue}
          />
        </div>
        {/* clear filter  */}
        <div>
          <button className="btn btn-danger" onClick={clearFilters}>
            Clear Filter
          </button>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
