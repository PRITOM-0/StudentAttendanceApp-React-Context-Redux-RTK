// npm install @reduxjs/toolkit react-redux
import { configureStore } from "@reduxjs/toolkit";
import { studentReducer } from "../Features/StudentAttendance/studentSlice";

export const store = configureStore({
  reducer: {
    student: studentReducer,
  },
  //devTools: process.env.NODE_ENV !== 'production', // if dev tool not working
});
