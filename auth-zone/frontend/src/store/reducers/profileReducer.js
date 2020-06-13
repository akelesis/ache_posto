import { CHANGE_PROFILE } from "../actions/actionTypes";

const profile = {
  picture:
    "https://widgetwhats.com/app/uploads/2019/11/free-profile-photo-whatsapp-4.png",
  name: "João da Silva",
  email: "marcus.tavares@outlook.com",
  phone: "73991371695",
};

export default function profileReducer(state = profile, action) {
  switch (action.type) {
    case CHANGE_PROFILE:
      return action.payload;
    default:
      return state;
  }
}
