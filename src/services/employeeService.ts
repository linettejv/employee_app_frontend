import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const employeeService = createApi({
  baseQuery: fetchBaseQuery({ baseUrl: '' }),
  endpoints: (builder) => ({
    getEmployees: builder.query({
      query: () => ({
        url: '',
        method: 'GET'
      })
    })
  })
});
