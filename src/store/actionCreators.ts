import * as actionTypes from "./actionTypes";

export function addProduct(productLine: IProductLine) {
  const action: CheckOutAction = {
    type: actionTypes.ADD_PRODUCT,
    productLine,
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}

export function updateProduct(productId: number, qty: number) {
  const action: CheckOutAction = {
    type: actionTypes.UPDATE_PRODUCT,
    productId,
    qty,
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}

export function removeProduct(productId: number) {
  const action: CheckOutAction = {
    type: actionTypes.REMOVE_PRODUCT,
    productId,
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}

export function setCustomer(customer: ICustomer) {
  const action: CheckOutAction = {
    type: actionTypes.SET_CUSTOMER,
    customer,
  };
  return (dispatch: DispatchType) => {
    dispatch(action);
  };
}
