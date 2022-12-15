import { ProductReducer } from "./ProductReducer";

describe("Testing ProductReducer", () => {
  test("Testing Loading Product", () => {
    const initialState = {
      loading: false,
    };

    const action = {
      type: "LOAD_PRODUCTS",
    };

    const finalState = {
      loading: true,
    };

    const reduceState = ProductReducer(initialState, action);

    expect(reduceState).toEqual(finalState);
  });

  test("Testing Successfull load of Product", () => {
    const initialState = {
      product: [],
      loading: true,
    };

    const action = {
      type: "LOAD_PRODUCTS_SUCCESS",
      payload: [
        {
          categoryName: "men",
          id: "1",
          imageURL:
            "https://res.cloudinary.com/amish11/image/upload/v1647537107/Category/men/Spider-Man_Men_fift0w.webp",
          isPopular: false,
          offer: 50,
          price: 9000,
          qty: 0,
          rating: 5,
          title: "Spider Man",
          _id: "badb173b-ba5d-46cb-a8e6-71d8065855a1",
        },
        {
          categoryName: "women",
          id: "2",
          imageURL:
            "https://res.cloudinary.com/amish11/image/upload/v1647537104/Category/women/Loki_gytktm.webp",
          isPopular: true,
          offer: 50,
          price: 7000,
          qty: 0,
          rating: 5,
          title: "Glorious purpose",
          _id: "47808874-b06d-4f37-a2b9-64390f439ad5",
        },
      ],
    };

    const finalState = {
      loading: false,
      product: [
        {
          categoryName: "men",
          id: "1",
          imageURL:
            "https://res.cloudinary.com/amish11/image/upload/v1647537107/Category/men/Spider-Man_Men_fift0w.webp",
          isPopular: false,
          offer: 50,
          price: 9000,
          qty: 0,
          rating: 5,
          title: "Spider Man",
          _id: "badb173b-ba5d-46cb-a8e6-71d8065855a1",
        },
        {
          categoryName: "women",
          id: "2",
          imageURL:
            "https://res.cloudinary.com/amish11/image/upload/v1647537104/Category/women/Loki_gytktm.webp",
          isPopular: true,
          offer: 50,
          price: 7000,
          qty: 0,
          rating: 5,
          title: "Glorious purpose",
          _id: "47808874-b06d-4f37-a2b9-64390f439ad5",
        },
      ],
    };

    const reduceState = ProductReducer(initialState, action);

    expect(reduceState).toEqual(finalState);
  });

  test("Testing Failing to Load Product", () => {
    const initialState = {
      product: [],
      loading: true,
    };

    const action = {
      type: "LOAD_FAIL",
    };

    const finalState = {
      product: null,
      loading: false,
    };

    const reduceState = ProductReducer(initialState, action);

    expect(reduceState).toEqual(finalState);
  });

  test("Should return default value", () => {
    const initialState = {
      loading: false,
      product: [],
    };

    const action = {
      type: "DEFAULT",
    };

    const finalState = {
      loading: false,
      product: [],
    };

    const reduceState = ProductReducer(initialState, action);

    expect(reduceState).toEqual(finalState);
  });
});
