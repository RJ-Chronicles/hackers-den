import { configureStore } from "@reduxjs/toolkit";

import authReducer from "./authenticationSlice";

const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});

export default store;
