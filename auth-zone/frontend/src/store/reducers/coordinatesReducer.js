import { CHANGED_X } from "../actions/actionTypes";
import { CHANGED_Y } from "../actions/actionTypes";

const inicialState = {
  x: 0,
  y: 0,
};

export default function (state = inicialState, action) {
  switch (action.type) {
    case CHANGED_X:
      return {
        ...state,
        x: action.payload,
      };
    case CHANGED_Y:
      return {
        ...state,
        y: action.payload,
      };
    default:
      return state;
  }
}
