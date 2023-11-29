import React from "react";
import { BsGridFill, BsList } from "react-icons/bs";
import "../style/sort.css";
import { useFilterContext } from "../context/filterContext";

const Sort = () => {
  const { FilterProducts, gridView, GridView, ListView, SortingValue } =
    useFilterContext();

  return (
    <>
      <div className="container">
        <div className="row gy-5">
          <div className="col-lg-3 mb-5">
            <button
              className={
                gridView
                  ? "btn btn-light mx-2 btn-sort active"
                  : "btn btn-light mx-2 btn-sort"
              }
              onClick={GridView}
            >
              <BsGridFill />
            </button>
            <button
              className={
                !gridView
                  ? "btn btn-light mx-2 btn-sort active"
                  : "btn btn-light mx-2 btn-sort"
              }
              onClick={ListView}
            >
              <BsList />
            </button>
          </div>
          <div className="col-lg-6 mb-5">
            <h5>{`${FilterProducts.length}`} Products Available</h5>
          </div>
          <div className="col-lg-3 mb-5">
            <form action="#">
              <select
                name="sort"
                id="sort"
                className="form-control form-select"
                onClick={SortingValue}
              >
                <option value="lowest">Price (Lowest)</option>
                <option value="#" disabled></option>
                <option value="highest">Price (Highest)</option>
                <option value="#" disabled></option>
                <option value="a-z">Price (a-z)</option>
                <option value="#" disabled></option>
                <option value="z-a">Price (z-a)</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sort;
