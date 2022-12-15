import { categoryFunction } from "./categoryFunction";

describe("Testing category sorting function", () => {
  test("checking all category", () => {
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

    const result = categoryFunction(initialState, true, true, true, true);

    expect(result).toEqual(finalState);
  });

  test("checking none category", () => {
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

    const result = categoryFunction(initialState, false, false, false, false);

    expect(result).toEqual(finalState);
  });
});
