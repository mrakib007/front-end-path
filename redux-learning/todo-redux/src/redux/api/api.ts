import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
   reducerPath: "baseApi",
   baseQuery: fetchBaseQuery({ baseUrl: "https://localhost:5000" }),
   endpoints: (builder) => ({
      getTodos: builder.query({
         query: () => {
            return {
               url: `/tasks`,
               method: "GET",
            };
         },
      }),
      addTodos: builder.mutation({
         query: (data) => {
            console.log(data);
            return {
               url: `/task`,
               method: "POST",
               body: data,
            };
         },
      }),
   }),
});

export const { useGetTodosQuery, useAddTodosMutation } = baseApi;
