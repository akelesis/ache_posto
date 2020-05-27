import { CHANGED_OPTIONS } from "../actions/actionTypes";

const inicialState = {
  flagOptions: false,
};

export default function (state = inicialState, action) {
  switch (action.type) {
    case CHANGED_OPTIONS:
      return { flagOptions: action.payload };
    default:
      return state;
  }
}
