import { combineReducers } from "redux";
import CartReducer from "./cart/cart.reducer";
import UserReducer from "./user/user.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import directoryReducers from "./directory/directory.reducers";
import shopReducer from "./shop/shop.reducer";

const presistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const rootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
  directory: directoryReducers,
  shop: shopReducer,
});

export default persistReducer(presistConfig, rootReducer);
