export interface ProductInterface {
  id: number;
  name: string;
  description: string;
  price: number;
}

export interface CustomerInterface {
  id: number;
  name: string;
  pricingRule: [PricingRuleInterface];
}

export interface PricingRuleInterface {
  type: string;
  discountedStartQty: number;
  productId: number;
}

export interface SelectorInterface {
  options: [SelectorOptionInterface];
  placeholder: string;
}

export interface SelectorOptionInterface {
  id: number;
  name: string;
}
