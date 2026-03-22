import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
const initialState = {
  students: [],
  isLoading: false,
  isError: false,
  error: null,
};
const URL = "http://localhost:3000/students";

export const fetchStudents = createAsyncThunk(
  "student/fetchStudents",
  async () => {
    const res = await fetch(URL);
    const data = await res.json();
    return data;
  },
);
export const addStudents = createAsyncThunk(
  "student/addStudents",
  async (student) => {
    const res = await fetch(URL, {
      method: "POST",
      body: JSON.stringify(student),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    return data;
  },
);
export const deleteStudents = createAsyncThunk(
  "student/deleteStudents",
  async (id) => {
    const res = await fetch(`${URL}/${id}`, {
      method: "DELETE",
    });
    return id;
  },
);
export const updateStudents = createAsyncThunk(
  "student/updateStudents",
  async ({ id, student }) => {
    const res = await fetch(`${URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(student),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    return data;
  },
);
export const presentStudents = createAsyncThunk(
  "student/presentStudents",
  async ({ id, student }) => {
    const res = await fetch(`${URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(student),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    return data;
  },
);
export const absentStudents = createAsyncThunk(
  "student/absentStudents",
  async ({ id, student }) => {
    const res = await fetch(`${URL}/${id}`, {
      method: "PUT",
      body: JSON.stringify(student),
      headers: { "Content-Type": "application/json" },
    });
    const data = await res.json();
    return data;
  },
);

const studentSlice = createSlice({
  name: "student",
  initialState: {
    students: [],
    isLoading: false,
    isError: false,
    error: null,
  },
  reducers: {
    editStudent: (state, action) => {
      const index = state.students.findIndex(
        (el) => el.id == action.payload.id,
      );
      state.students[index].editMode = true;
    },
  },
  extraReducers: (builder) => {
    builder
      //fetch data
      .addCase(fetchStudents.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchStudents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.students = action.payload;
        state.isError = false;
        state.error = null;
      })
      .addCase(fetchStudents.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.payload;
      })
      //Add data
      .addCase(addStudents.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(addStudents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.students.push(action.payload);
        state.isError = false;
        state.error = null;
      })
      .addCase(addStudents.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })

      //Delete data
      .addCase(deleteStudents.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(deleteStudents.fulfilled, (state, action) => {
        state.isLoading = false;
        state.students = state.students.filter(
          (el) => el.id !== action.payload,
        );

        state.isError = false;
        state.error = null;
      })
      .addCase(deleteStudents.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })

      //Update data
      .addCase(updateStudents.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
        state.error = null;
      })
      .addCase(updateStudents.fulfilled, (state, action) => {
        state.isLoading = false;
        const index = state.students.findIndex(
          (el) => el.id == action.payload.id,
        );
        state.students[index].name = action.payload.name;
        state.students[index].class = action.payload.class;
        state.students[index].editMode = false;
        state.isError = false;
        state.error = null;
      })
      .addCase(updateStudents.rejected, (state, action) => {
        state.isLoading = false;
        state.isError = true;
        state.error = action.error?.message;
      })

      //present Student
      .addCase(presentStudents.fulfilled, (state, action) => {
        const index = state.students.findIndex(
          (el) => el.id == action.payload.id,
        );
        state.students[index].status = "present";
      })
      //absent Student
      .addCase(absentStudents.fulfilled, (state, action) => {
        const index = state.students.findIndex(
          (el) => el.id == action.payload.id,
        );
        state.students[index].status = "absent";
      });
  },
});

export const { editStudent } = studentSlice.actions;
export const studentReducer = studentSlice.reducer;
