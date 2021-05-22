import React from "react";
import { Dispatch } from "redux";
import { useSelector, useDispatch } from "react-redux";
import "./style.scss";
import { updateProduct, removeProduct } from "../../store/actionCreators";

const Table: React.FC = () => {
  const checkOut: CheckOutState = useSelector((state: CheckOutState) => state);
  const dispatch: Dispatch<any> = useDispatch();

  const updateProductQty = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const productId: string | null =
      e.currentTarget.getAttribute("data-product-id");
    const qty: number = parseInt(e.currentTarget.value);
    if (productId === null) {
      return;
    }
    dispatch(updateProduct(parseInt(productId), qty));
  };

  const removeOneProduct = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const productId: string | null =
      e.currentTarget.getAttribute("data-product-id");
    if (productId === null) {
      return;
    }
    dispatch(removeProduct(parseInt(productId)));
  };

  return (
    <div className="table">
      <div className="table-row">
        <div className="table-row-item">Product</div>
        <div className="table-row-item">Description</div>
        <div className="table-row-item">Price</div>
        <div className="table-row-item">Qty</div>
        <div className="table-row-item"></div>
      </div>
      {checkOut.productLines
        ? checkOut.productLines.map((pl: IProductLine) => (
            <div className="table-row" key={pl.product.id}>
              <div className="table-row-item">{pl.product.name}</div>
              <div className="table-row-item">{pl.product.description}</div>
              <div className="table-row-item">{pl.product.price}</div>
              <div className="table-row-item">
                <input
                  defaultValue={pl.qty}
                  data-product-id={pl.product.id}
                  type="number"
                  min="1"
                  step="1"
                  pattern="\d*"
                  onChange={updateProductQty}
                ></input>
              </div>
              <div className="table-row-item">
                <button
                  onClick={removeOneProduct}
                  data-product-id={pl.product.id}
                >
                  Remove
                </button>
              </div>
            </div>
          ))
        : ""}
    </div>
  );
};

export default Table;
