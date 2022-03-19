const rangeFunction = (arrOfData, range) => {
  if (range === 3)
    return [...arrOfData].filter((product) => product.price <= 10000);
  if (range === 2)
    return [...arrOfData].filter((product) => product.price <= 7000);
  if (range === 1)
    return [...arrOfData].filter((product) => product.price <= 3000);
  if (range === 0)
    return [...arrOfData].filter((product) => product.price <= 1000);
  return arrOfData;
};

export { rangeFunction };
