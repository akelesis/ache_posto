import { createStore, combineReducers } from "redux";
import flagOptionsReducer from "./reducers/flagOptionsReducer";
import coordinatesReducer from "./reducers/coordinatesReducer";

const reducers = combineReducers({
  options: flagOptionsReducer,
  coordinates: coordinatesReducer,
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
