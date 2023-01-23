import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { logger } from "./middleware/logger";
//import logger from "redux-logger";
import { rootReducer } from "./root-reducer";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["user"]
};

const presistedReducer = persistReducer(persistConfig, rootReducer);

//root-reducer
const middlewares = [process.env.NODE_ENV !== "production" && logger].filter(
  Boolean
);

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(
  presistedReducer,
  undefined,
  composedEnhancers
);

export const persistor = persistStore(store);