import { compose, createStore, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import { logger } from "./middleware/logger";
import { rootReducer } from "./root-reducer";
import createSagaMiddleware from "@redux-saga/core";

import { rootSaga } from "./root-saga";
const persistConfig = {
  key: "root",
  storage,
  whitelist: ["cart"]
};

const sagaMiddleware = createSagaMiddleware();
const presistedReducer = persistReducer(persistConfig, rootReducer);

//root-reducer
const middlewares = [
  process.env.NODE_ENV !== "production" && logger,
  sagaMiddleware
].filter(Boolean);

const composedEnhancers = compose(applyMiddleware(...middlewares));

export const store = createStore(
  presistedReducer,
  undefined,
  composedEnhancers
);

sagaMiddleware.run(rootSaga);

export const persistor = persistStore(store);
