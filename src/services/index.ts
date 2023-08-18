import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseApi = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: 'http://localhost:4000/',
    prepareHeaders: (headers) => {
      const token = localStorage.getItem('AuthKey');

      if (token) headers.set('Authorization', `Bearer ${token}`);
      console.log(headers);

      return headers;
    }
    // credentials: 'include'
  }),
  refetchOnMountOrArgChange: true,
  refetchOnReconnect: true,
  endpoints: () => ({}),
  tagTypes: ['getEmployeeList']
});

export default baseApi;
