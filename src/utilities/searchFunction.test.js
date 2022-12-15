import { searchFunction } from "./searchFunction";

describe("Testing Search Function", () => {
  test("Success search result", () => {
    const initialState = [
      {
        _id: "01",
        offer: 50,
        qty: 0,
        title: "Spider Man",
        price: 9000,
        rating: 5,
        isPopular: false,
        categoryName: "men",
        imageURL:
          "https://res.cloudinary.com/amish11/image/upload/v1647537107/Category/men/Spider-Man_Men_fift0w.webp",
      },
      {
        _id: "02",
        offer: 50,
        qty: 0,
        title: "Glorious purpose",
        price: 7000,
        rating: 5,
        isPopular: true,
        categoryName: "women",
        imageURL:
          "https://res.cloudinary.com/amish11/image/upload/v1647537104/Category/women/Loki_gytktm.webp",
      },
    ];

    const finalState = [
      {
        _id: "01",
        offer: 50,
        qty: 0,
        title: "Spider Man",
        price: 9000,
        rating: 5,
        isPopular: false,
        categoryName: "men",
        imageURL:
          "https://res.cloudinary.com/amish11/image/upload/v1647537107/Category/men/Spider-Man_Men_fift0w.webp",
      },
    ];

    const result = searchFunction(initialState, "Spider Man");

    expect(result).toEqual(finalState);
  });

  test("Success default value", () => {
    const initialState = [
      {
        _id: "01",
        offer: 50,
        qty: 0,
        title: "Spider Man",
        price: 9000,
        rating: 5,
        isPopular: false,
        categoryName: "men",
        imageURL:
          "https://res.cloudinary.com/amish11/image/upload/v1647537107/Category/men/Spider-Man_Men_fift0w.webp",
      },
      {
        _id: "02",
        offer: 50,
        qty: 0,
        title: "Glorious purpose",
        price: 7000,
        rating: 5,
        isPopular: true,
        categoryName: "women",
        imageURL:
          "https://res.cloudinary.com/amish11/image/upload/v1647537104/Category/women/Loki_gytktm.webp",
      },
    ];

    const finalState = [
      {
        _id: "01",
        offer: 50,
        qty: 0,
        title: "Spider Man",
        price: 9000,
        rating: 5,
        isPopular: false,
        categoryName: "men",
        imageURL:
          "https://res.cloudinary.com/amish11/image/upload/v1647537107/Category/men/Spider-Man_Men_fift0w.webp",
      },
      {
        _id: "02",
        offer: 50,
        qty: 0,
        title: "Glorious purpose",
        price: 7000,
        rating: 5,
        isPopular: true,
        categoryName: "women",
        imageURL:
          "https://res.cloudinary.com/amish11/image/upload/v1647537104/Category/women/Loki_gytktm.webp",
      },
    ];

    const result = searchFunction(initialState);

    expect(result).toEqual(finalState);
  });
});
