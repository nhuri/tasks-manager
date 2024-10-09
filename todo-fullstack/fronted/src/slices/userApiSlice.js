import { apiSlice } from "./apiSlice";
import { USER_URL } from "./urlConstrains";
const userApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getUsers: builder.query({
      query: () => ({
        url: USER_URL,
      }),
      keepUnusedDataFor: 5,
    }),
    getUserById: builder.query({
      query: (userId) => ({
        url: `${USER_URL}/${userId}`,
      }),
      keepUnusedDataFor: 5,
      provideTags: ["User"],
    }),
    register: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/register`,
        method: "POST",
        body: data,
      }),
    }),
    login: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/login`,
        method: "POST",
        body: data,
      }),
    }),
    logout: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/logout`,
        method: "PATCH",
        body: data,
      }),
    }),
    forgotPassword: builder.mutation({
      query: (data) => ({
        url: `${USER_URL}/forgotPassword`,
        method: "POST",
        body: data,
      }),
    }),
  }),
});
export const {
  useGetUsersQuery,
  useGetUserByIdQuery,
  useRegisterMutation,
  useLoginMutation,
  useLogoutMutation,
  useForgotPasswordMutation,
} = userApiSlice;
