import { createStore, combineReducers } from "redux";
import flagOptionsReducer from "./reducers/flagOptionsReducer";
import flagCreateProductReducer from "./reducers/flagCreateProductReducer";
import productsReducer from "./reducers/productsReducer";
import productReducer from "./reducers/productReducer";
import promotionsReducer from "./reducers/promotionsReducer";
import promotionReducer from "./reducers/promotionReducer";
import profileReducer from "./reducers/profileReducer";

const reducers = combineReducers({
  options: flagOptionsReducer,
  createProduct: flagCreateProductReducer,
  products: productsReducer,
  product: productReducer,
  promotions: promotionsReducer,
  promotion: promotionReducer,
  profile: profileReducer,
});

function storeConfig() {
  return createStore(reducers);
}

export default storeConfig;
