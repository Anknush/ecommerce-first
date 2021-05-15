import { combineReducers } from "redux";
import CartReducer from "./cart/cart.reducer";
import UserReducer from "./user/user.reducer";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const presistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"],
};
const rootReducer = combineReducers({
  user: UserReducer,
  cart: CartReducer,
});

export default persistReducer(presistConfig, rootReducer);
