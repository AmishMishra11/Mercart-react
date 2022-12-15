import { sortingFunction } from "./sortingFunction";

describe("Testing sorting funciton", () => {
  test("Testing sort by high price", () => {
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

    const result = sortingFunction(initialState, "high");

    expect(result).toEqual(finalState);
  });

  test("Testing sort by low price", () => {
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

    const result = sortingFunction(initialState, "low");

    expect(result).toEqual(finalState);
  });

  test("Testing Default value", () => {
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

    const result = sortingFunction(initialState, "");

    expect(result).toEqual(finalState);
  });
});
