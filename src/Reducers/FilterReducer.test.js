import { filterReducer } from "./FilterReducer";

describe("Testing FilterReducer", () => {
  test("Testing Search Filter", () => {
    const initialState = { search: "" };

    const action = {
      type: "SEARCH",
      payload: "IronMan",
    };

    const finalState = { search: "IronMan" };

    const reduceState = filterReducer(initialState, action);

    expect(reduceState).toEqual(finalState);
  });

  test("Testing Sorting Filter", () => {
    const initialState = { sorting: "" };

    const action = {
      type: "SORTING",
      payload: "low",
    };

    const finalState = { sorting: "low" };

    const reduceState = filterReducer(initialState, action);

    expect(reduceState).toEqual(finalState);
  });

  test("Testing Men Filter", () => {
    const initialState = { men: false };

    const action = {
      type: "MEN",
      payload: true,
    };

    const finalState = { men: true };

    const reduceState = filterReducer(initialState, action);

    expect(reduceState).toEqual(finalState);
  });

  test("Testing Women Filter", () => {
    const initialState = { women: false };

    const action = {
      type: "WOMEN",
      payload: true,
    };

    const finalState = { women: true };

    const reduceState = filterReducer(initialState, action);

    expect(reduceState).toEqual(finalState);
  });

  test("Testing Kid Filter", () => {
    const initialState = { kid: false };

    const action = {
      type: "KID",
      payload: true,
    };

    const finalState = { kid: true };

    const reduceState = filterReducer(initialState, action);

    expect(reduceState).toEqual(finalState);
  });

  test("Testing Toy Filter", () => {
    const initialState = { toy: false };

    const action = {
      type: "TOY",
      payload: true,
    };

    const finalState = { toy: true };

    const reduceState = filterReducer(initialState, action);

    expect(reduceState).toEqual(finalState);
  });

  test("Testing Rating Filter", () => {
    const initialState = { rating: "" };

    const action = {
      type: "RATING",
      payload: 1,
    };

    const finalState = { rating: 1 };

    const reduceState = filterReducer(initialState, action);

    expect(reduceState).toEqual(finalState);
  });

  test("Testing Range Filter", () => {
    const initialState = { range: 3 };

    const action = {
      type: "RANGE",
      payload: 1,
    };

    const finalState = { range: 1 };

    const reduceState = filterReducer(initialState, action);

    expect(reduceState).toEqual(finalState);
  });

  test("Testing Clear filter functionality", () => {
    const initialState = {
      search: "IronMan",
      sorting: "low",
      men: false,
      women: true,
      kid: false,
      toy: true,
      rating: 3,
      range: 2,
    };

    const action = {
      type: "CLEAR",
    };

    const finalState = {
      sorting: "",
      search: "",
      men: false,
      women: false,
      kid: false,
      toy: false,
      rating: "",
      range: 3,
    };

    const reduceState = filterReducer(initialState, action);

    expect(reduceState).toEqual(finalState);
  });

  test("Should return default value", () => {
    const initialState = {
      search: "",
      sorting: "",
      men: false,
      women: false,
      kid: false,
      toy: false,
      rating: "",
      range: 3,
    };

    const action = {
      type: "DEFAULT",
    };

    const finalState = {
      search: "",
      sorting: "",
      men: false,
      women: false,
      kid: false,
      toy: false,
      rating: "",
      range: 3,
    };

    const reduceState = filterReducer(initialState, action);

    expect(reduceState).toEqual(finalState);
  });
});
