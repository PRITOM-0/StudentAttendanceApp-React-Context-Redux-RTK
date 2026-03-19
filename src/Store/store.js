// npm i redux react-redux
import { combineReducers, createStore } from "redux";
import { studentReducer } from "../Reducer/StudentReducer";

const rootReducer = combineReducers({
  studentState: studentReducer,
});

export const store = createStore(rootReducer);
