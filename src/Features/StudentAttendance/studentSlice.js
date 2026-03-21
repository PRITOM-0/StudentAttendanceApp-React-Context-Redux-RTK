import { createSlice } from "@reduxjs/toolkit";
import { demoList } from "../../assets/data";

const studentSlice = createSlice({
  name: "student",
  initialState: demoList,
  reducers: {
    addStudent: (state, action) => {
      const newStudent = {
        id: Date.now() + "",
        name: action.payload.name,
        class: action.payload.class,
        status: undefined,
        editMode: false,
      };
      state.push(newStudent);
    },
    deleteStudent: (state, action) => {
      return [...state.filter((el) => el.id !== action.payload)];
    },
    editStudent: (state, action) => {
      const index = state.findIndex((el) => el.id == action.payload.id);
      state[index].editMode = true;
    },
    updateStudent: (state, action) => {
      if (
        action.payload.name.trim() === "" ||
        action.payload.class.trim() === ""
      ) {
        alert("Enter Student Information");
        return state;
      }
      const index = state.findIndex((el) => el.id == action.payload.std.id);
      state[index].name = action.payload.name;
      state[index].class = action.payload.class;
      state[index].editMode = false;
    },
    presentStudent: (state, action) => {
      const index = state.findIndex((el) => el.id == action.payload.id);
      state[index].status = true;
    },
    absentStudent: (state, action) => {
      const index = state.findIndex((el) => el.id == action.payload.id);
      state[index].status = false;
    },
  },
});

export const {
  addStudent,
  deleteStudent,
  editStudent,
  updateStudent,
  presentStudent,
  absentStudent,
} = studentSlice.actions;
export const studentReducer = studentSlice.reducer;
