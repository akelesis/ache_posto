import { ADD_PROMOTION } from "../actions/actionTypes";
import { UPDATE_PROMOTION } from "../actions/actionTypes";
import { REMOVE_PROMOTION } from "../actions/actionTypes";

const promotions = [
  {
    id: 1,
    product: "Gasolina Comum",
    price: "4,50",
    description: "",
    period: "24h",
  },
  {
    id: 2,
    product: "Gasolina Aditivada",
    price: "4,70",
    description: "",
    period: "24h",
  },
  {
    id: 3,
    product: "Farmacia",
    productName: "Álcool em Gel",
    price: "10,00",
    description: "",
    period: "24h",
  },
];

export default function (state = promotions, action) {
  switch (action.type) {
    case ADD_PROMOTION:
      return {
        promotions: [
          ...state.promotions,
          {
            id: action.payload.id,
            dependency: action.payload.dependency,
            product: action.payload.product,
            price: action.payload.price,
            productDescription: action.payload.productDescription,
          },
        ],
      };
    case UPDATE_PROMOTION:
      return { promotions: action.payload };
    case REMOVE_PROMOTION:
      return { promotions: action.payload };
    default:
      return state;
  }
}
