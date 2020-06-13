import { ADD_PRODUCT } from "../actions/actionTypes";
import { UPDATE_PRODUCT } from "../actions/actionTypes";
import { REMOVE_PRODUCT } from "../actions/actionTypes";

const inicialState = {
  products: [
    {
      id: 1,
      icon: 4,
      productName: "Farmacia",
    },
    { id: 2, icon: 0, productName: "Gasolina Comum", productPrice: "4,20" },
    { id: 3, icon: 0, productName: "Etanol", productPrice: "3,80" },
    {
      id: 4,
      icon: 1,
      productName: "Pousada",
    },
    { id: 5, icon: 0, productName: "Gasolina Aditivada", productPrice: "4,80" },
  ],
};

export default function (state = inicialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        products: [
          ...state.products,
          {
            id: action.payload.id,
            icon: action.payload.icon,
            productName: action.payload.productName,
            productPrice: action.payload.productPrice,
            productDescription: action.payload.productDescription,
          },
        ],
      };
    case UPDATE_PRODUCT:
      return { products: action.payload };
    case REMOVE_PRODUCT:
      return { products: action.payload };
    default:
      return state;
  }
}
