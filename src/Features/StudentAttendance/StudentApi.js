import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// const URL =
//   "https://studentattendanceapp-react-context-redux-7q59.onrender.com/";
const URL="http://localhost:3000/";
export const rootApi = createApi({
  reducerPath: "rootApi",
  baseQuery: fetchBaseQuery({ baseUrl: URL }),
  tagTypes: ["AllStudent"],
  endpoints: (builder) => ({
    fetchStudents: builder.query({
      query: () => "students",
      providesTags: ["AllStudent"],
    }),
    addStudents: builder.mutation({
      query: (student) => ({
        url: "students",
        method: "POST",
        body: student,
      }),
      invalidatesTags: ["AllStudent"],
    }),
    deleteStudents: builder.mutation({
      query: (id) => ({
        url: `students/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["AllStudent"],
    }),
    updateStudents: builder.mutation({
      query: ({ id, student }) => ({
        url: `students/${id}`,
        method: "PUT",
        body: student,
      }),
      invalidatesTags: ["AllStudent"],
    }),
  }),
});

export const {
  useFetchStudentsQuery,
  useAddStudentsMutation,
  useDeleteStudentsMutation,
  useUpdateStudentsMutation,
} = rootApi;
