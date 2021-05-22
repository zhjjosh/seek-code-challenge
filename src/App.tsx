import React from "react";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import "./App.scss";
import Selector from "./component/Selector";
import Table from "./component/Table";
import customers from "./data/Customer.json";
import products from "./data/Product.json";
import { setCustomer, addProduct } from "./store/actionCreators";

function App() {
  const checkOut: CheckOutState = useSelector((state: CheckOutState) => state);
  const dispatch: Dispatch<any> = useDispatch();
  const customerOptions: ISelectorOption[] = customers.map((customer) => ({
    id: customer.id,
    name: customer.name,
  }));

  const handCustomerChange = (arg: string) => {
    const customer: ICustomer | undefined = customers.find(
      (c) => c.id === parseInt(arg)
    );
    if (customer === undefined) {
      return;
    }
    dispatch(setCustomer(customer));
  };

  const productOptions: ISelectorOption[] = products
    .filter((product) => {
      if (checkOut.productLines === undefined) {
        return false;
      }
      const prod = checkOut.productLines.find(
        (pl) => pl.product.id === product.id
      );
      return prod === undefined;
    })
    .map((product) => ({
      id: product.id,
      name: product.name,
    }));

  const handleAddProduct = (arg: string) => {
    const product: IProduct | undefined = products.find(
      (p) => p.id === parseInt(arg)
    );
    if (product === undefined) {
      return;
    }
    const productLine: IProductLine = {
      product,
      qty: 1,
    };
    dispatch(addProduct(productLine));
  };

  return (
    <div className="App">
      <h1>Checkout</h1>
      <Selector
        options={customerOptions}
        placeholder="Please select a customer"
        selectorChanged={handCustomerChange}
      />
      {checkOut.customer ? (
        <>
          {productOptions.length > 0 ? (
            <Selector
              options={productOptions}
              placeholder="Please select a product"
              selectorChanged={handleAddProduct}
            />
          ) : (
            ""
          )}
          <Table />
          <div className="total">Total: ${checkOut.total.toFixed(2)}</div>
        </>
      ) : (
        ""
      )}
    </div>
  );
}

export default App;
