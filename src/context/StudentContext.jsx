import { createContext, useReducer, useState } from "react";
import { demoList } from "../assets/data";
import { studentReducer } from "../Reducer/StudentReducer";

export const studentContext = createContext();
const initState={
  studentList:[...demoList],

}
const StudentContext = ({ children }) => {
  const [state, dispatch] = useReducer(studentReducer, initState);
  const ctxValue = { state, dispatch };
  return (
    <studentContext.Provider value={ctxValue}>
      {children}
    </studentContext.Provider>
  );
};

export default StudentContext;
