interface IProduct {
  id: number;
  name: string;
  description: string;
  price: number;
}

interface IProductLine {
  product: IProduct;
  qty: number;
}

interface ICustomer {
  id: number;
  name: string;
  pricingRule: IPricingRule[];
}

interface IPricingRule {
  type: string;
  discountedStartQty?: number;
  discountedPrice?: number;
  productId: number;
}

interface ISelectorOption {
  id: number;
  name: string;
}

type CheckOutState = {
  customer?: ICustomer;
  productLines?: IProductLine[];
  total: number;
};

type CheckOutAction = {
  type: string;
  customer?: ICustomer;
  productLine?: IProductLine;
  productId?: number;
  qty?: number;
};

type DispatchType = (args: CheckOutAction) => CheckOutAction;
