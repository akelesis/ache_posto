import { CHANGED_CREATE_PRODUCT } from "../actions/actionTypes";

const inicialState = {
  flagCreateProduct: false,
};

export default function (state = inicialState, action) {
  switch (action.type) {
    case CHANGED_CREATE_PRODUCT:
      return { flagCreateProduct: action.payload };
    default:
      return state;
  }
}
