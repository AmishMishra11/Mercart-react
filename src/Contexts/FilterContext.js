import { createContext, useContext, useReducer } from "react";

import { filterReducer } from "../Reducers/FilterReducer";

const FilterContext = createContext(null);

const useFilter = () => useContext(FilterContext);

const FilterContextProvider = ({ children }) => {
  const [stateFilter, dispatchFilter] = useReducer(filterReducer, {
    sorting: "",
    men: false,
    women: false,
    kid: false,
    toy: false,
    rating: "",
    range: 3,
  });

  return (
    <FilterContext.Provider value={{ stateFilter, dispatchFilter }}>
      {children}
    </FilterContext.Provider>
  );
};

export { useFilter, FilterContextProvider };
