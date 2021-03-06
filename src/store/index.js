import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import reducers from "./reducers";

const persistConfig = {
  key: "root",
  storage,
  blacklist: ["form"]
};

const persistedReducer = persistReducer(persistConfig, reducers);

const devTools =
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__();

const store = createStore(persistedReducer, devTools);
const persistor = persistStore(store);
export { store, persistor };
