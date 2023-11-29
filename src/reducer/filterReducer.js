const filterReducer = (state, action) => {
  switch (action.type) {
    // *****************************************LOADING_FEATURE_PRODUCTS*****************************************************************

    case "LOADING_FEATURE_PRODUCTS":
      return {
        ...state,
        isFilterLoading: true,
      };

    // *****************************************LOAD_FILTER_PRODUCTS*****************************************************************
    case "LOAD_FILTER_PRODUCTS":
      let priceAr̥r̥ = action.payload.map((curElem) => curElem.price);
      let maxPrice = priceAr̥r̥.reduce(
        (initialVal, CurElm) => Math.max(initialVal, CurElm),
        0
      );

      return {
        ...state,
        FilterProducts: [...action.payload],
        allProducts: [...action.payload],
        searchFilters: {
          ...state.searchFilters,
          maxPrice: maxPrice,
          price: maxPrice,
        },
      };

    // *****************************************GRID_VIEW_PRODUCTS*****************************************************************
    case "GRID_VIEW_PRODUCTS":
      return {
        ...state,
        gridView: true,
      };

    // *****************************************LIST_VIEW_PRODUCTS*****************************************************************
    case "LIST_VIEW_PRODUCTS":
      return {
        ...state,
        gridView: false,
      };

    // *****************************************GET_SORTING_DROPDOWN_VALUE*****************************************************************
    case "GET_SORTING_DROPDOWN_VALUE":
      return {
        ...state,
        sortingValue: action.payload,
      };

    // *****************************************SORT_PRODUCTS*****************************************************************
    case "SORT_PRODUCTS":
      let newSortData;
      const { FilterProducts, sortingValue } = state;
      let tempSortData = [...FilterProducts];

      const newSortValue = (a, b) => {
        if (sortingValue === "lowest") {
          return a.price - b.price;
        }

        if (sortingValue === "highest") {
          return b.price - a.price;
        }

        if (state.sortingValue === "a-z") {
          return a.title.localeCompare(b.title);
        }

        if (state.sortingValue === "z-a") {
          return b.title.localeCompare(a.title);
        }
      };

      newSortData = tempSortData.sort(newSortValue);
      return {
        ...state,
        FilterProducts: newSortData,
      };

    // *****************************************SEARCH_FILTER_PRODUCTS*****************************************************************
    case "SEARCH_FILTER_PRODUCTS":
      const { name, value } = action.payload;
      return {
        ...state,
        searchFilters: {
          ...state.searchFilters,
          [name]: value,
        },
      };

    // *****************************************UPDATE_SEARCH_PRODUCTS*****************************************************************
    case "UPDATE_SEARCH_PRODUCTS":
      let { allProducts } = state;
      let tempFilterProducts = [...allProducts];

      const { text, category, price } = state.searchFilters;

      if (text) {
        tempFilterProducts = tempFilterProducts.filter((curElm) => {
          return curElm.title.toLowerCase().includes(text);
        });
      }

      if (category !== "All") {
        tempFilterProducts = tempFilterProducts.filter((curElm) => {
          return curElm.category.toLowerCase() === category.toLowerCase();
        });
      }
      if (price === 0) {
        tempFilterProducts = tempFilterProducts.filter((curElm) => {
          return curElm.price === price;
        });
      } else {
        tempFilterProducts = tempFilterProducts.filter((curElm) => {
          return curElm.price <= price;
        });
      }
      // if (color !== "All") {
      //   tempFilterProducts = tempFilterProducts.filter((curElm) => {
      //     return curElm.colors.includes(color);
      //   });
      // }

      // company
      // if (company !== "all") {
      //   tempFilterProducts = tempFilterProducts.filter((curElm) => {
      //     return curElm.company === company;
      //   });
      // }

      return {
        ...state,
        FilterProducts: tempFilterProducts,
      };

    // *****************************************CLEAR_FILTERS*****************************************************************
    case "CLEAR_FILTERS":
      return {
        ...state,
        searchFilters: {
          ...state.searchFilters,
          text: " ",
          category: "all",
          company: "all",
          color: "all",
        },
      };

    default:
      return state;
  }
};

export default filterReducer;
