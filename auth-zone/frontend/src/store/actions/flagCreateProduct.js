import { CHANGED_CREATE_PRODUCT } from "./actionTypes";

export function changeCreateProduct(newBool) {
  return {
    type: CHANGED_CREATE_PRODUCT,
    payload: newBool,
  };
}
