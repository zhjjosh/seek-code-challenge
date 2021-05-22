import React from "react";
import "./App.scss";
import Selector from "./component/Selector";
import Table from "./component/Table";
import customers from "./data/Customer.json";
import { SelectorOptionInterface } from "./type/Interface";

function App() {
  const customerOptions = customers.map((customer) => ({
    id: customer.id,
    name: customer.name,
  })) as [SelectorOptionInterface];

  return (
    <div className="App">
      <h1>Add Checkout</h1>
      <Selector
        options={customerOptions}
        placeholder="Please select a customer"
      />

      <Table />
    </div>
  );
}

export default App;
