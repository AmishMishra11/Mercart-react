export const filterReducer = (stateFilter, actionFilter) => {
  switch (actionFilter.type) {
    case "SEARCH":
      return { ...stateFilter, search: actionFilter.payload };
    case "SORTING":
      return { ...stateFilter, sorting: actionFilter.payload };
    case "MEN":
      return { ...stateFilter, men: actionFilter.payload };
    case "WOMEN":
      return { ...stateFilter, women: actionFilter.payload };
    case "KID":
      return { ...stateFilter, kid: actionFilter.payload };
    case "TOY":
      return { ...stateFilter, toy: actionFilter.payload };

    case "RATING":
      return { ...stateFilter, rating: actionFilter.payload };

    case "RANGE":
      return { ...stateFilter, range: actionFilter.payload };

    case "CLEAR":
      return {
        ...stateFilter,
        sorting: "",
        search: "",
        men: false,
        women: false,
        kid: false,
        toy: false,
        rating: "",
        range: 3,
      };

    default:
      return stateFilter;
  }
};
