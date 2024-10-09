// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { TASK_URL } from './urlConstrains'
import { apiSlice } from './apiSlice'


export const todoApiSlice = apiSlice.injectEndpoints({
    endpoints:(builder)=>({
        getTodos: builder.query({
            query:()=>({
               url: TASK_URL
            })
        }),
        getTodosById: builder.query({
             query:(todoId)=>({
                url : `${TASK_URL}/${todoId}`
             })
        }),
        addTodo: builder.mutation({
            query:(data)=>({
               url : TASK_URL,
               method:'POST',
               body: data
            })
       })

    })})
export const {useGetTodosQuery, useGetTodosByIdQuery, useAddTodoMutation} = todoApiSlice
    


