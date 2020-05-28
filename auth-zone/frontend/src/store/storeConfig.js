import { createStore, combineReducers } from "redux";
import flagOptionsReducer from "./reducers/flagOptionsReducer";
import coordinatesReducer from "./reducers/coordinatesReducer";
import flagCreateProductReducer from "./reducers/flagCreateProductReducer";

const reducers = combineReducers({
  options: flagOptionsReducer,
  createProduct: flagCreateProductReducer,
  coordinates: coordinatesReducer,
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
