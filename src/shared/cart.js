export const findProduct = (products, _id) => products.find((product) => _id === product._id);

export const findProductIndex = (products, _id) => products?.findIndex((product) => product._id == _id);

export const removeProduct = (products, _id) => products.filter((product) => product._id != _id);

export const calcDiscount = (price, discount) => price - (price * discount) / 100;

export const calcDiscountPriceAndBenfit = (price, discount, quantity) => {
  const discountPrice = calcDiscount(price, discount) * quantity;
  const benfit = price * quantity - discountPrice;

  return { discountPrice, benfit };
};

export const calcTotalPrice = (products) => {
  return products?.reduce(
    (total, product) => total + calcDiscount(product.price, product.discount) * product.quantity,
    0,
  );
};

export const calcTotalBenfit = (products) => {
  return products?.reduce((totalBenfit, product) => {
    const { benfit } = calcDiscountPriceAndBenfit(product.price, product.discount, product.quantity);

    return totalBenfit + benfit;
  }, 0);
};
