import { ADD_PRODUCT } from "../actions/actionTypes";
import { UPDATE_PRODUCT } from "../actions/actionTypes";
import { REMOVE_PRODUCT } from "../actions/actionTypes";

export function addProduct(newProd) {
  return {
    type: ADD_PRODUCT,
    payload: newProd,
  };
}

export function updateProduct(newArrayProd) {
  return {
    type: UPDATE_PRODUCT,
    payload: newArrayProd,
  };
}

export function removeProduct(newArrayProd) {
  return {
    type: REMOVE_PRODUCT,
    payload: newArrayProd,
  };
}
