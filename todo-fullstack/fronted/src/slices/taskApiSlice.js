import { apiSlice } from "./apiSlice";
import { TASK_URL } from "./urlConstrains";
const taskApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getTasks: builder.query({
      query: () => ({
        url: TASK_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getTaskById: builder.query({
      query: (taskId) => ({
        url: `${TASK_URL}/${taskId}`,
      }),
      keepUnusedDataFor: 5,
      provideTags: ["Task"],
    }),
    getTasksByUserId: builder.query({
      query: () => ({
        url: `${TASK_URL}/byUser`,
        withCredentials: "include",
      }),
      keepUnusedDataFor: 5,
      provideTags: ["Task"],
    }),
    addTask: builder.mutation({
      query: (data) => ({
        url: `${TASK_URL}`,
        method: "POST",
        body: data,
      }),
    }),
    editTask: builder.mutation({
      query: ({ taskId, data }) => ({
        url: `${TASK_URL}/${taskId}`,
        method: "PATCH",
        body: data,
      }),
    }),
    deleteTask: builder.mutation({
      query: ({ taskId }) => ({
        url: `${TASK_URL}/${taskId}`,
        method: "DELETE",
      }),
    }),
  }),
});
export const {
  useGetTasksQuery,
  useGetTasksByUserIdQuery,
  useGetTaskByIdQuery,
  useAddTaskMutation,
  useEditTaskMutation,
  useDeleteTaskMutation,
} = taskApiSlice;
