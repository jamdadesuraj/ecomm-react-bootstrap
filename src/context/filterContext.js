import { createContext, useContext, useEffect, useReducer } from "react";
import { useProductContext } from "./productContext";
import reducer from "../reducer/filterReducer";

const FilterContext = createContext();

const initialState = {
  isFilterLoading: false,
  FilterProducts: [],
  allProducts: [],
  gridView: true,
  sortingValue: "lowest",
  searchFilters: {
    text: " ",
    category: "all",
    company: "all",
    color: "all",
    maxPrice: 0,
    minPrice: 0,
    price: 0,
  },
};

const FilterProductContext = ({ children }) => {
  const { products } = useProductContext();
  const [state, dispatch] = useReducer(reducer, initialState);

  // *****************************************products grid view*****************************************************************

  const GridView = () => {
    return dispatch({ type: "GRID_VIEW_PRODUCTS" });
  };

  // *****************************************products list view*****************************************************************

  const ListView = () => {
    return dispatch({ type: "LIST_VIEW_PRODUCTS" });
  };

  // *****************************************sorting select value*****************************************************************

  const SortingValue = (event) => {
    const userValue = event.target.value;
    dispatch({ type: "GET_SORTING_DROPDOWN_VALUE", payload: userValue });
  };

  // *****************************************search filter products*****************************************************************

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;
    return dispatch({
      type: "SEARCH_FILTER_PRODUCTS",
      payload: { name, value },
    });
  };

  //
  useEffect(() => {
    dispatch({ type: "UPDATE_SEARCH_PRODUCTS" });
    dispatch({ type: "SORT_PRODUCTS" });
  }, [products, state.sortingValue, state.searchFilters]);

  //
  useEffect(() => {
    dispatch({ type: "LOADING_FEATURE_PRODUCTS" });
    dispatch({ type: "LOAD_FILTER_PRODUCTS", payload: products });
  }, [products]);

  // *****************************************clear filters*****************************************************************

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  return (
    <FilterContext.Provider
      value={{
        ...state,
        GridView,
        ListView,
        SortingValue,
        updateFilterValue,
        clearFilters,
      }}
    >
      {children}
    </FilterContext.Provider>
  );
};

// *****************************************custom hook*****************************************************************

const useFilterContext = () => {
  return useContext(FilterContext);
};

export { FilterProductContext, useFilterContext };
