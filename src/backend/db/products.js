import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
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
    _id: uuid(),
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
    _id: uuid(),
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
  {
    _id: uuid(),
    offer: 50,
    qty: 0,
    title: "Deadpool",
    price: 6000,
    rating: 5,
    isPopular: true,
    categoryName: "men",
    imageURL:
      "https://res.cloudinary.com/amish11/image/upload/v1647537106/Category/men/Deadpool_v0gqjt.webp",
  },
  {
    _id: uuid(),
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
    _id: uuid(),
    offer: 50,
    qty: 0,
    title: "Captain America ",
    price: 900,
    rating: 1,
    isPopular: false,
    categoryName: "men",
    imageURL:
      "https://res.cloudinary.com/amish11/image/upload/v1647537106/Category/men/men_ymz25w.jpg",
  },
  {
    _id: uuid(),
    offer: 50,
    qty: 0,
    title: "Marvel",
    price: 2000,
    rating: 2,
    isPopular: false,
    categoryName: "men",
    imageURL:
      "https://res.cloudinary.com/amish11/image/upload/v1647537106/Category/men/Marvel_Men_idzyea.webp",
  },

  {
    _id: uuid(),
    offer: 50,
    qty: 0,
    title: "Captain America",
    price: 2000,
    rating: 1,
    isPopular: false,
    categoryName: "women",
    imageURL:
      "https://res.cloudinary.com/amish11/image/upload/v1647537105/Category/women/women_dae6aw.jpg",
  },
  {
    _id: uuid(),
    offer: 50,
    qty: 0,
    title: "Marvel",
    price: 6000,
    rating: 4,
    isPopular: false,
    categoryName: "women",
    imageURL:
      "https://res.cloudinary.com/amish11/image/upload/v1647537105/Category/women/Marvel_ez3adr.webp",
  },

  {
    _id: uuid(),
    offer: 50,
    qty: 0,
    title: "SpiderMan",
    price: 2000,
    rating: 2,
    isPopular: false,
    categoryName: "kid",
    imageURL:
      "https://res.cloudinary.com/amish11/image/upload/v1647537105/Category/kid/Spider-Man_Red_djzvgs.jpg",
  },
  {
    _id: uuid(),
    offer: 50,
    qty: 0,
    title: "Black Panther",
    price: 4000,
    rating: 5,
    isPopular: false,
    categoryName: "women",
    imageURL:
      "https://res.cloudinary.com/amish11/image/upload/v1647537104/Category/women/Black_Panther_Women_mmqxj4.webp",
  },
  {
    _id: uuid(),
    offer: 50,
    qty: 0,
    title: "Wolverine",
    price: 2000,
    rating: 5,
    isPopular: false,
    categoryName: "kid",
    imageURL:
      "https://res.cloudinary.com/amish11/image/upload/v1647537106/Category/kid/Wolverine_Kid_iarp1u.jpg",
  },
  {
    _id: uuid(),
    offer: 50,
    qty: 0,
    title: "Thor Worthy ",
    price: 3000,
    rating: 2,
    isPopular: false,
    categoryName: "women",
    imageURL:
      "https://res.cloudinary.com/amish11/image/upload/v1647537105/Category/women/Worthy_squv1t.webp",
  },

  {
    _id: uuid(),
    offer: 50,
    qty: 0,
    title: "Iron Man L",
    price: 2000,
    rating: 5,
    isPopular: false,
    categoryName: "toy",
    imageURL:
      "https://res.cloudinary.com/amish11/image/upload/v1647680525/Category/toy/Iron_Man_ifumea.jpg",
  },

  {
    _id: uuid(),
    offer: 50,
    qty: 0,
    title: "Marvel",
    price: 6000,
    rating: 4,
    isPopular: false,
    categoryName: "kid",
    imageURL:
      "https://res.cloudinary.com/amish11/image/upload/v1647537106/Category/kid/Marvel_Kid_zejsdz.jpg",
  },
  {
    _id: uuid(),
    offer: 50,
    qty: 0,
    title: "SpiderMan Hoodie ",
    price: 3000,
    rating: 2,
    isPopular: false,
    categoryName: "kid",
    imageURL:
      "https://res.cloudinary.com/amish11/image/upload/v1647537105/Category/kid/Spider-Man_hoodie_nbp6rq.jpg",
  },

  {
    _id: uuid(),
    offer: 50,
    qty: 0,
    title: "Wolverine",
    price: 2000,
    rating: 5,
    isPopular: false,
    categoryName: "toy",
    imageURL:
      "https://res.cloudinary.com/amish11/image/upload/v1647537105/Category/toy/Wolverine_toy_nm1v00.jpg",
  },
  {
    _id: uuid(),
    offer: 50,
    qty: 0,
    title: "Iron SpiderMan  ",
    price: 3000,
    rating: 2,
    isPopular: false,
    categoryName: "toy",
    imageURL:
      "https://res.cloudinary.com/amish11/image/upload/v1647537104/Category/toy/Spider-Man_toy_zxntq8.jpg",
  },
  {
    _id: uuid(),
    offer: 50,
    qty: 0,
    title: "Loki",
    price: 2000,
    rating: 3,
    isPopular: false,
    categoryName: "women",
    imageURL:
      "https://res.cloudinary.com/amish11/image/upload/v1647537104/Category/women/Loki_2_lbd9it.webp",
  },
  {
    _id: uuid(),
    offer: 50,
    qty: 0,
    title: "Iron Man",
    price: 2000,
    rating: 3,
    isPopular: false,
    categoryName: "toy",
    imageURL:
      "https://res.cloudinary.com/amish11/image/upload/v1647537104/Category/toy/Iron_Man_toy_s2ndws.jpg",
  },
  {
    _id: uuid(),
    offer: 50,
    qty: 0,
    title: "Iron Man",
    price: 3500,
    rating: 4,
    isPopular: false,
    categoryName: "men",
    imageURL:
      "https://res.cloudinary.com/amish11/image/upload/v1647537106/Category/men/Iron_Man_Men_ednbvx.webp",
  },
  {
    _id: uuid(),
    offer: 50,
    qty: 0,
    title: "Black Panther",
    price: 4000,
    rating: 5,
    isPopular: false,
    categoryName: "men",
    imageURL:
      "https://res.cloudinary.com/amish11/image/upload/v1647537106/Category/men/Black_Panther_j1wdes.webp",
  },
];
