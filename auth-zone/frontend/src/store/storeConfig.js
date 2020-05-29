import { createStore, combineReducers } from "redux";
import flagOptionsReducer from "./reducers/flagOptionsReducer";
import flagCreateProductReducer from "./reducers/flagCreateProductReducer";
import productsReducer from "./reducers/productsReducer";
import productReducer from "./reducers/productReducer";

const reducers = combineReducers({
  options: flagOptionsReducer,
  createProduct: flagCreateProductReducer,
  products: productsReducer,
  product: productReducer,
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
