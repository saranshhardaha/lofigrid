import { configureStore } from "@reduxjs/toolkit";
import thunk, { ThunkMiddleware } from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { RootState, RootAction, rootReducer } from "../reducers"; // Replace with the correct path to your reducers and types

const composeEnhancers = composeWithDevTools({});

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(
      thunk as ThunkMiddleware<RootState, RootAction>
    ),
  enhancers: [composeEnhancers],
});

export default store;
