import { SELECT_PRODUCT } from "../actions/actionTypes";

const product = {};

export default function (state = product, action) {
  switch (action.type) {
    case SELECT_PRODUCT:
      return {
        id: action.payload.id,
        icon: action.payload.icon,
        productName: action.payload.productName,
        productPrice: action.payload.productPrice,
        productDescription: action.payload.productDescription,
      };
    default:
      return state;
  }
}
