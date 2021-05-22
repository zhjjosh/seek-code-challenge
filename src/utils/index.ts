export const getIndexByProductId = (
  productLines: IProductLine[],
  productId: number
) => {
  return productLines.findIndex((p) => p.product.id === productId);
};

export const calculateTotal = (
  productLines: IProductLine[],
  pricingRules: IPricingRule[]
) => {
  let total = 0;
  productLines.forEach((pl) => {
    const pr = pricingRules.find((p) => p.productId === pl.product.id);
    if (pr) {
      if (pr.type === "Discount" && pr.discountedPrice) {
        total += subTotalForDiscountType(pr.discountedPrice, pl.qty);
      } else if (pr.type === "Multiple" && pr.discountedStartQty) {
        total += subTotalForMultipleType(
          pr.discountedStartQty,
          pl.qty,
          pl.product.price
        );
      }
    } else {
      total += subTotalForNoDiscount(pl.product.price, pl.qty);
    }
  });
  return total;
};

export const subTotalForNoDiscount = (price: number, qty: number) => {
  return price * qty;
};

export const subTotalForDiscountType = (
  discountedPrice: number,
  qty: number
) => {
  return discountedPrice * qty;
};

export const subTotalForMultipleType = (
  discountedStartQty: number,
  qty: number,
  price: number
) => {
  const multiplier: number = Math.floor(qty / (discountedStartQty + 1));
  return price * (qty - multiplier);
};
