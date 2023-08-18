import baseApi from '../../../services/index';

// --------------------- list employeee --------------------

interface Employee {
  id: number;
  name: string;
  joining_date: string;
  status: string;
  experience: number;
  role: string;
  department_id: number;
  department: string;
  address: {
    City: string;
    Country: string;
    line1: string;
    address_line2: string;
    pincode: string;
  };
  email: string;
  password: string;
}

interface EmployeeCreateType {
  name: string;
  joining_date: string;
  status: string;
  experience: number;
  role: string;
  department_id: number;
  department: string;
  address: {
    City: string;
    Country: string;
    line1: string;
    address_line2: string;
    State: string;
    pincode: string;
  };
  email: string;
  password: string;
}

interface Department {
  id: number;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date;
  name: string;
}

export const employeeApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getEmployeeList: builder.query<{ employees: Employee[] }, void>({
      query: () => '/employees',
      providesTags: ['getEmployeeList']
    }),
    getEmployeeById: builder.query<{ employee: Employee }, Number>({
      query: (id) => `/employees/${id}`
    }),
    createEmployee: builder.mutation({
      query: (body: EmployeeCreateType) => ({
        url: '/employees',
        method: 'POST',
        body
      }),
      invalidatesTags: ['getEmployeeList']
    }),
    updateEmployee: builder.mutation({
      query: (body: Employee) => ({
        url: `/employees/${body.id}`,
        method: 'PUT',
        body
      }),
      invalidatesTags: ['getEmployeeList']
    }),
    deleteEmployee: builder.mutation({
      query: (id) => ({
        url: `/employees/${id}`,
        method: 'DELETE'
      }),
      invalidatesTags: ['getEmployeeList']
    }),
    getDepartments: builder.query<Department[], void>({
      query: () => '/department'
    })
  })
});

export const {
  useGetEmployeeListQuery,
  useGetEmployeeByIdQuery,
  useCreateEmployeeMutation,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
  useGetDepartmentsQuery
} = employeeApi;
