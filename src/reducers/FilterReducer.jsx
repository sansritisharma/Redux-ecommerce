const FilterReducer = (state, action) => {
  if (action.type === "LOAD_FILTER_PRODUCTS") {
    return {
      ...state,
      filteredProds: [...action.payload],
      allProds: [...action.payload],
    };
  }
  if (action.type === "GET_SORT_VALUE") {
    const sortValue = action.payload;
    return {
      ...state,
      sortingVal: sortValue,
    };
  }
  if (action.type === "SORTING_PRODUCTS") {
    let newSortData;
    let tempSortProduct = [...action.payload];

    if (state.sortingVal === "lowhigh") {
      newSortData = tempSortProduct.sort(
        (a, b) =>
          Number(a.discountedPrice.replace(/[^0-9.-]+/g, "")) -
          Number(b.discountedPrice.replace(/[^0-9.-]+/g, ""))
      );
    }

    if (state.sortingVal === "ratings") {
      newSortData = tempSortProduct.sort((a, b) => b.starRating - a.starRating);
    }

    if (state.sortingVal === "newfirst") {
      newSortData = tempSortProduct.sort((a, b) => b.new - a.new);
    }

    return {
      ...state,
      filteredProds: newSortData,
    };
  }

  if (action.type === "FILTER_BY_BRAND") {
    let filteredBrandData;

    const tempData = [...state.allProds];

    const selectedValues = action.payload.map((e) => e.toLowerCase());

    filteredBrandData = tempData.filter((el) => {
      return selectedValues.includes(el.brand);
    });

    if (state.sortingVal === "lowhigh") {
      filteredBrandData = filteredBrandData.sort(
        (a, b) =>
          Number(a.discountedPrice.replace(/[^0-9.-]+/g, "")) -
          Number(b.discountedPrice.replace(/[^0-9.-]+/g, ""))
      );
    }

    if (state.sortingVal === "ratings") {
      filteredBrandData = filteredBrandData.sort((a,b) => b.starRating - a.starRating);;
    }

    if (state.sortingVal === "newfirst") {
      filteredBrandData = filteredBrandData.sort((a, b) => b.new - a.new);
    }

    if (selectedValues.length) {
      return {
        ...state,

        filteredProds: filteredBrandData,
      };
    } else {
      return {
        ...state,

        filteredProds: tempData,
      };
    }
  }
};

export default FilterReducer;
