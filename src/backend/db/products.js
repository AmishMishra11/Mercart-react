import { v4 as uuid } from "uuid";

/**
 * Product Database can be added here.
 * You can add products of your wish with different attributes
 * */

export const products = [
  {
    _id: uuid(),
    title: "Captain America Shirt",
    price: "5000",
    rating: "5",
    categoryName: "men",
    imageURL: "https://mercart.netlify.app/images/category/men.jpeg",
  },
  {
    _id: uuid(),
    title: "Spider Man Shirt",
    price: "3000",
    rating: "3",
    categoryName: "kid",
    imageURL: "https://mercart.netlify.app/images/category/kids.jpg",
  },
  {
    _id: uuid(),
    title: "Captain America Shirt",
    price: "1000",
    rating: "4",
    categoryName: "women",
    imageURL: "https://mercart.netlify.app/images/category/women.jpg",
  },
];
