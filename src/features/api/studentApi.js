import { rootApi } from "./rootApi";
export const studentApi = rootApi.injectEndpoints({
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
} = studentApi;