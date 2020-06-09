import { ADD_PROMOTION } from "../actions/actionTypes";
import { UPDATE_PROMOTION } from "../actions/actionTypes";
import { REMOVE_PROMOTION } from "../actions/actionTypes";

export function addPromotion(newPromo) {
  return {
    type: ADD_PROMOTION,
    payload: newPromo,
  };
}

export function updatePromotion(newArrayPromo) {
  return {
    type: UPDATE_PROMOTION,
    payload: newArrayPromo,
  };
}

export function removePromotion(newArrayPromo) {
  return {
    type: REMOVE_PROMOTION,
    payload: newArrayPromo,
  };
}
