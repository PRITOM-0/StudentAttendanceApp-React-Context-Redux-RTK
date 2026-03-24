// npm install @reduxjs/toolkit react-redux
import { configureStore } from "@reduxjs/toolkit";
import { rootApi } from "../Features/StudentAttendance/StudentApi";

export const store = configureStore({
  reducer: {
    [rootApi.reducerPath]: rootApi.reducer,
  },
  middleware: (defaultMiddleware) =>
    defaultMiddleware().concat(rootApi.middleware),

  //devTools: process.env.NODE_ENV !== 'production', // if dev tool not working
});
