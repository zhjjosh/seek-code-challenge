import React from "react";
import "./style.scss";
import Selector from "../Selector";
import products from "../../data/Product.json";
import { SelectorOptionInterface } from "../../type/Interface";

function Table() {
  const productOptions = products.map((product) => ({
    id: product.id,
    name: product.name,
  })) as [SelectorOptionInterface];

  return (
    <div className="table">
      <div className="table-row">
        <div className="table-row-item">Product</div>
        <div className="table-row-item">Description</div>
        <div className="table-row-item">Price</div>
      </div>
      <div className="table-row">
        <div className="table-row-item">
          <Selector
            options={productOptions}
            placeholder="Please select a product"
          />
        </div>
        <div className="table-row-item"></div>
        <div className="table-row-item"></div>
      </div>
    </div>
  );
}

export default Table;
