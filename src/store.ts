import { configureStore } from '@reduxjs/toolkit';

import employeeReducer from './reducers/employeeReducer';
import baseApi from './services';

const store = configureStore({
  reducer: {
    employees: employeeReducer,
    [baseApi.reducerPath]: baseApi.reducer
  },
  middleware: (getDefaultMiddleware) => [...getDefaultMiddleware(), baseApi.middleware]
});

export default store;
