import { CHANGE_PROFILE } from "./actionTypes";

export function changeProfile(info) {
  return {
    type: CHANGE_PROFILE,
    payload: info,
  };
}
