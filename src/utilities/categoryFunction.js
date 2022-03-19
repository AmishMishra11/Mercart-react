const categoryFunction = (arrOfData, men, women, kid, toy) => {
  const filteredData = [];

  if (men) {
    const newData = arrOfData.filter(
      (product) => product.categoryName === "men"
    );
    filteredData.push(...newData);
  }
  if (women) {
    const newData = arrOfData.filter(
      (product) => product.categoryName === "women"
    );
    filteredData.push(...newData);
  }
  if (kid) {
    const newData = arrOfData.filter(
      (product) => product.categoryName === "kid"
    );
    filteredData.push(...newData);
  }
  if (toy) {
    const newData = arrOfData.filter(
      (product) => product.categoryName === "toy"
    );
    filteredData.push(...newData);
  }

  if (filteredData.length !== 0) {
    return filteredData;
  }
  return arrOfData;
};

export { categoryFunction };
