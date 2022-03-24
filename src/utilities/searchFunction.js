const searchFunction = (arrOfData, search) => {
  if (search) {
    return [...arrOfData].filter(
      (product) =>
        product.title.toLowerCase().includes(search.toLowerCase()) ||
        product.categoryName.toLowerCase().includes(search.toLowerCase())
    );
  }
  return arrOfData;
};
export { searchFunction };
