import { getIndexByProductId, calculateTotal } from "../utils";
import * as actionTypes from "./actionTypes";

const initialState: CheckOutState = {
  productLines: [],
  total: 0,
};

const reducer = (
  state: CheckOutState = initialState,
  action: CheckOutAction
): CheckOutState => {
  switch (action.type) {
    case actionTypes.ADD_PRODUCT:
      if (
        state.productLines === undefined ||
        action.productLine === undefined
      ) {
        return state;
      }
      const newIndex: number = getIndexByProductId(
        state.productLines,
        action.productLine.product.id
      );

      const newProductLines = state.productLines;
      if (newIndex >= 0) {
        newProductLines.splice(newIndex, 1, action.productLine);
        return {
          ...state,
          productLines: newProductLines,
        };
      }
      newProductLines.push(action.productLine);
      return {
        ...state,
        productLines: newProductLines,
        total: calculateTotal(
          newProductLines,
          state.customer ? state.customer.pricingRule : []
        ),
      };
    case actionTypes.UPDATE_PRODUCT:
      if (
        state.productLines === undefined ||
        action.productId === undefined ||
        action.qty === undefined
      ) {
        return state;
      }
      const updatedIndex: number = getIndexByProductId(
        state.productLines,
        action.productId
      );
      if (updatedIndex >= 0) {
        const updatedProductLines = state.productLines;
        updatedProductLines.splice(updatedIndex, 1, {
          product: state.productLines[updatedIndex].product,
          qty: action.qty,
        });
        return {
          ...state,
          productLines: updatedProductLines,
          total: calculateTotal(
            updatedProductLines,
            state.customer ? state.customer.pricingRule : []
          ),
        };
      }
      return state;

    case actionTypes.REMOVE_PRODUCT:
      if (state.productLines === undefined || action.productId === undefined) {
        return state;
      }
      const removedIndex: number = getIndexByProductId(
        state.productLines,
        action.productId
      );

      if (removedIndex >= 0) {
        const removedProductLines = state.productLines;
        removedProductLines.splice(removedIndex, 1);
        return {
          ...state,
          productLines: removedProductLines,
          total: calculateTotal(
            removedProductLines,
            state.customer ? state.customer.pricingRule : []
          ),
        };
      }
      return state;
    case actionTypes.SET_CUSTOMER:
      return {
        ...state,
        customer: action.customer,
        total: calculateTotal(
          state.productLines ? state.productLines : [],
          action.customer ? action.customer.pricingRule : []
        ),
      };
  }
  return state;
};

export default reducer;
