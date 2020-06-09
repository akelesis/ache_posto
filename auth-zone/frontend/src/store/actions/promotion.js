import { SELECT_PROMOTION } from "../actions/actionTypes";

export function selectPromotion(promotion) {
  return {
    type: SELECT_PROMOTION,
    payload: promotion,
  };
}
