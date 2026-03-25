import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// const URL =
//   "https://studentattendanceapp-react-context-redux-7q59.onrender.com/";
const URL = "http://localhost:3000/";
export const rootApi = createApi({
  reducerPath: "rootApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  tagTypes: ["AllStudent"],
  endpoints: () => ({}),
});
