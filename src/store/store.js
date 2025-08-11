import { configureStore } from "@reduxjs/toolkit";

import loggerMiddleware from "./middleware/logger";
import { rootReducer } from "./reducers";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(loggerMiddleware),
});
export default store;
