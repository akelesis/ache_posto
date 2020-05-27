import { CHANGED_X } from "../actions/actionTypes";
import { CHANGED_Y } from "../actions/actionTypes";

export function changeX(newNumber) {
  return {
    type: CHANGED_X,
    payload: newNumber,
  };
}

export function changeY(newNumber) {
  return {
    type: CHANGED_Y,
    payload: newNumber,
  };
}
