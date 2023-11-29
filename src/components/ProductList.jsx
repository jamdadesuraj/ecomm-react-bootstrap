import React from "react";
import { useFilterContext } from "../context/filterContext";
import GridView from "./GridView";
import ListView from "./ListView";

const ProductList = () => {
  const { FilterProducts, gridView } = useFilterContext();

  if (gridView === true) {
    return <GridView products={FilterProducts} />;
  }

  if (gridView === false) {
    return <ListView products={FilterProducts} />;
  }
};

export default ProductList;
