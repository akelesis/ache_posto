import { SELECT_PROMOTION } from "../actions/actionTypes";

const promotion = {};

export default function (state = promotion, action) {
  switch (action.type) {
    case SELECT_PROMOTION:
      return {
        id: action.payload.id,
        product: action.payload.product,
        productName: action.payload.productName,
        price: action.payload.price,
        productDescription: action.payload.description,
      };
    default:
      return state;
  }
}
