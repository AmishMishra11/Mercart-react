const ratingFunction = (arrOfData, rating) => {
  for (let i = 1; i <= 5; i++) {
    if (rating === i) {
      return arrOfData.filter((item) => item.rating === i);
    }
  }
  return arrOfData;
};

export { ratingFunction };
