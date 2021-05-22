import {
  subTotalForMultipleType,
  subTotalForDiscountType,
  subTotalForNoDiscount,
  calculateTotal,
} from ".";

import customers from "../data/Customer.json";
import products from "../data/Product.json";

test("subTotalForMultipleType", () => {
  expect(subTotalForMultipleType(4, 2, 10)).toBe(20);
  expect(subTotalForMultipleType(4, 4, 10)).toBe(40);
  expect(subTotalForMultipleType(4, 5, 10)).toBe(40);
  expect(subTotalForMultipleType(4, 6, 10)).toBe(50);
  expect(subTotalForMultipleType(4, 9, 10)).toBe(80);
  expect(subTotalForMultipleType(4, 98, 10)).toBe(790);
});

test("subTotalForDiscountType", () => {
  expect(subTotalForDiscountType(10, 2)).toBe(20);
  expect(subTotalForDiscountType(20, 10)).toBe(200);
});

test("subTotalForNoDiscount", () => {
  expect(subTotalForNoDiscount(10, 2)).toBe(20);
  expect(subTotalForNoDiscount(20, 10)).toBe(200);
});

test("calculateTotal", () => {
  expect(
    calculateTotal(
      [
        {
          product: products[1],
          qty: 10,
        },
      ],
      customers[0].pricingRule
    )
  ).toBe(3229.9);
  expect(
    calculateTotal(
      [
        {
          product: products[1],
          qty: 10,
        },
      ],
      customers[1].pricingRule
    )
  ).toBe(2999.9);
  expect(
    calculateTotal(
      [
        {
          product: products[1],
          qty: 10,
        },
      ],
      customers[2].pricingRule
    )
  ).toBe(2583.92);
  expect(
    calculateTotal(
      [
        {
          product: products[1],
          qty: 10,
        },
        {
          product: products[2],
          qty: 8,
        },
      ],
      customers[1].pricingRule
    )
  ).toBe(6159.82);
  expect(
    calculateTotal(
      [
        {
          product: products[1],
          qty: 10,
        },
        {
          product: products[2],
          qty: 8,
        },

        {
          product: products[0],
          qty: 6,
        },
      ],
      customers[1].pricingRule
    )
  ).toBe(7779.76);
  //   expect(calculateTotal(20, 10)).toBe(200);
});
