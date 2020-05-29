import { CHANGED_OPTIONS } from "./actionTypes";

export function changeFlagOptions(newBool) {
  return {
    type: CHANGED_OPTIONS,
    payload: newBool,
  };
}
