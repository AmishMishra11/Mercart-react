import { cartReducer } from "./CartReducer";

describe("Testing CartReducer", () => {
  test("Should add item to whishlist", () => {
    const initialState = {
      myWishlist: [],
    };

    const action = {
      type: "ADD_WISHLIST",
      payload: [
        {
          categoryName: "women",
          createdAt: "2022-07-26T14:55:55+05:30",
          id: "2",
          imageURL:
            "https://res.cloudinary.com/amish11/image/upload/v1647537104/Category/women/Loki_gytktm.webp",
          isPopular: true,
          offer: 50,
          price: 7000,
          qty: 0,
          rating: 5,
          title: "Glorious purpose",
          updatedAt: "2022-07-26T14:55:55+05:30",
          _id: "9e5e90cf-b0a6-4037-8acc-22bd054798fe",
        },
      ],
    };

    const finalState = {
      myWishlist: [
        {
          categoryName: "women",
          createdAt: "2022-07-26T14:55:55+05:30",
          id: "2",
          imageURL:
            "https://res.cloudinary.com/amish11/image/upload/v1647537104/Category/women/Loki_gytktm.webp",
          isPopular: true,
          offer: 50,
          price: 7000,
          qty: 0,
          rating: 5,
          title: "Glorious purpose",
          updatedAt: "2022-07-26T14:55:55+05:30",
          _id: "9e5e90cf-b0a6-4037-8acc-22bd054798fe",
        },
      ],
    };

    const reduceState = cartReducer(initialState, action);

    expect(reduceState).toEqual(finalState);
  });

  test("Should add item to the cart", () => {
    const initialState = {
      myCart: [],
      quantity: 0,
    };

    const action = {
      type: "ADD_CART",
      payload: [
        {
          categoryName: "women",
          createdAt: "2022-07-26T16:27:09+05:30",
          id: "2",
          imageURL:
            "https://res.cloudinary.com/amish11/image/upload/v1647537104/Category/women/Loki_gytktm.webp",
          isPopular: true,
          offer: 50,
          price: 7000,
          qty: 1,
          rating: 5,
          title: "Glorious purpose",
          updatedAt: "2022-07-26T16:27:09+05:30",
          _id: "9e5e90cf-b0a6-4037-8acc-22bd054798fe",
        },
      ],
    };

    const finalState = {
      myCart: [
        {
          categoryName: "women",
          createdAt: "2022-07-26T16:27:09+05:30",
          id: "2",
          imageURL:
            "https://res.cloudinary.com/amish11/image/upload/v1647537104/Category/women/Loki_gytktm.webp",
          isPopular: true,
          offer: 50,
          price: 7000,
          qty: 1,
          rating: 5,
          title: "Glorious purpose",
          updatedAt: "2022-07-26T16:27:09+05:30",
          _id: "9e5e90cf-b0a6-4037-8acc-22bd054798fe",
        },
      ],
      quantity: 1,
    };

    const reduceState = cartReducer(initialState, action);

    expect(reduceState).toEqual(finalState);
  });

  test("Should remove an item from the cart", () => {
    const initialState = {
      myCart: [
        {
          categoryName: "women",
          createdAt: "2022-07-26T16:27:09+05:30",
          id: "2",
          imageURL:
            "https://res.cloudinary.com/amish11/image/upload/v1647537104/Category/women/Loki_gytktm.webp",
          isPopular: true,
          offer: 50,
          price: 7000,
          qty: 1,
          rating: 5,
          title: "Glorious purpose",
          updatedAt: "2022-07-26T16:27:09+05:30",
          _id: "9e5e90cf-b0a6-4037-8acc-22bd054798fe",
        },
        {
          categoryName: "kid",
          createdAt: "2022-07-26T16:31:45+05:30",
          id: "5",
          imageURL:
            "https://res.cloudinary.com/amish11/image/upload/v1647537106/Category/kid/Venom_hixbbu.jpg",
          isPopular: true,
          offer: 50,
          price: 1000,
          qty: 1,
          rating: 5,
          title: "Venom",
          updatedAt: "2022-07-26T16:31:45+05:30",
          _id: "c4d3885b-2806-4c84-9b41-1b7ad3fff5c5",
        },
      ],
      quantity: 2,
    };

    const action = {
      type: "REMOVE_CART",
      payload: [
        {
          categoryName: "women",
          createdAt: "2022-07-26T16:27:09+05:30",
          id: "2",
          imageURL:
            "https://res.cloudinary.com/amish11/image/upload/v1647537104/Category/women/Loki_gytktm.webp",
          isPopular: true,
          offer: 50,
          price: 7000,
          qty: 1,
          rating: 5,
          title: "Glorious purpose",
          updatedAt: "2022-07-26T16:27:09+05:30",
          _id: "9e5e90cf-b0a6-4037-8acc-22bd054798fe",
        },
      ],
    };

    const finalState = {
      myCart: [
        {
          categoryName: "women",
          createdAt: "2022-07-26T16:27:09+05:30",
          id: "2",
          imageURL:
            "https://res.cloudinary.com/amish11/image/upload/v1647537104/Category/women/Loki_gytktm.webp",
          isPopular: true,
          offer: 50,
          price: 7000,
          qty: 1,
          rating: 5,
          title: "Glorious purpose",
          updatedAt: "2022-07-26T16:27:09+05:30",
          _id: "9e5e90cf-b0a6-4037-8acc-22bd054798fe",
        },
      ],
      quantity: 1,
    };

    const reduceState = cartReducer(initialState, action);

    expect(reduceState).toEqual(finalState);
  });

  test("Should return default value", () => {
    const initialState = {
      myWishlist: [],
      myCart: [],
      quantity: 0,
    };

    const action = {
      type: "DEFAULT",
    };

    const finalState = {
      myWishlist: [],
      myCart: [],
      quantity: 0,
    };

    const reduceState = cartReducer(initialState, action);

    expect(reduceState).toEqual(finalState);
  });
});
