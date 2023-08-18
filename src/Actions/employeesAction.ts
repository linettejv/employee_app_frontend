import { createAction } from '@reduxjs/toolkit';

type EmployeeType = {
  id: number;
  name: string;
  joiningDate: string;
  isActive: string;
  experience: string;
  role: string;
  department: string;
  departmentId: string;
  address: {
    City: string;
    Country: string;
    line1: string;
    address_line2: string;
  };
  username: string;
  password: string;
};

type EmployeeId = {
  id: number;
};

const addEmployee = createAction<{ employee: EmployeeType }>('EMPLOYEE:CREATE');

const editEmployee = createAction<{ employee: EmployeeType }>('EMPLOYEE:EDIT');

const deleteEmployee = createAction<EmployeeId>('EMPLOYEE:DELETE');

export { addEmployee, editEmployee, deleteEmployee };
