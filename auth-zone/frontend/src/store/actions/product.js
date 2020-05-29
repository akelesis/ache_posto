import { SELECT_PRODUCT } from "../actions/actionTypes";

export function selectProduct(product) {
  return {
    type: SELECT_PRODUCT,
    payload: product,
  };
}
