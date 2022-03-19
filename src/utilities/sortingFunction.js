const sortingFunction = (arrOfData, sorting) => {
  if (sorting === "high") {
    return [...arrOfData].sort((a, b) => b.price - a.price);
  }
  if (sorting === "low") {
    return [...arrOfData].sort((a, b) => a.price - b.price);
  }
  return arrOfData;
};

export { sortingFunction };
