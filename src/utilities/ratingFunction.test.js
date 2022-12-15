import { ratingFunction } from "./ratingFunction";

describe("Testing rating function", () => {
  test("Test success result", () => {
    const initialState = [
      {
        _id: "03",
        offer: 50,
        qty: 0,
        title: "Venom",
        price: 1000,
        rating: 5,
        isPopular: true,
        categoryName: "kid",
        imageURL:
          "https://res.cloudinary.com/amish11/image/upload/v1647537106/Category/kid/Venom_hixbbu.jpg",
      },
      {
        _id: "04",
        offer: 50,
        qty: 0,
        title: "Dr Strange",
        price: 2000,
        rating: 2,
        isPopular: false,
        categoryName: "toy",
        imageURL:
          "https://res.cloudinary.com/amish11/image/upload/v1647680525/Category/toy/Dr._Strange_jlezka.jpg",
      },
    ];

    const finalState = [
      {
        _id: "03",
        offer: 50,
        qty: 0,
        title: "Venom",
        price: 1000,
        rating: 5,
        isPopular: true,
        categoryName: "kid",
        imageURL:
          "https://res.cloudinary.com/amish11/image/upload/v1647537106/Category/kid/Venom_hixbbu.jpg",
      },
    ];

    const result = ratingFunction(initialState, 5);

    expect(result).toEqual(finalState);
  });

  test("Test default result", () => {
    const initialState = [
      {
        _id: "03",
        offer: 50,
        qty: 0,
        title: "Venom",
        price: 1000,
        rating: 5,
        isPopular: true,
        categoryName: "kid",
        imageURL:
          "https://res.cloudinary.com/amish11/image/upload/v1647537106/Category/kid/Venom_hixbbu.jpg",
      },
      {
        _id: "04",
        offer: 50,
        qty: 0,
        title: "Dr Strange",
        price: 2000,
        rating: 2,
        isPopular: false,
        categoryName: "toy",
        imageURL:
          "https://res.cloudinary.com/amish11/image/upload/v1647680525/Category/toy/Dr._Strange_jlezka.jpg",
      },
    ];

    const finalState = [
      {
        _id: "03",
        offer: 50,
        qty: 0,
        title: "Venom",
        price: 1000,
        rating: 5,
        isPopular: true,
        categoryName: "kid",
        imageURL:
          "https://res.cloudinary.com/amish11/image/upload/v1647537106/Category/kid/Venom_hixbbu.jpg",
      },
      {
        _id: "04",
        offer: 50,
        qty: 0,
        title: "Dr Strange",
        price: 2000,
        rating: 2,
        isPopular: false,
        categoryName: "toy",
        imageURL:
          "https://res.cloudinary.com/amish11/image/upload/v1647680525/Category/toy/Dr._Strange_jlezka.jpg",
      },
    ];

    const result = ratingFunction(initialState, 0);

    expect(result).toEqual(finalState);
  });
});
