import { addEmployee, editEmployee } from '../Actions/employeesAction';
import { createReducer } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 4,
    name: 'Linette',
    joiningDate: '2011-10-02',
    isActive: 'Active',
    experience: 9,
    role: 'Developer',
    departmentId: 3,
    department: 'HR',
    address: 'Sreepuram',
    line1: 'Mavelikara',
    line2: 'Thrissur'
  },
  {
    id: 3,
    name: 'Devi',
    joiningDate: '2011-10-02',
    isActive: 'InActive',
    experience: 9,
    role: 'HR',
    departmentId: 3,
    department: 'HR',
    address: 'Sreepuram',
    line1: 'Mavelikara',
    line2: 'Kollam'
  },
  {
    id: 1,
    name: 'Vivek',
    joiningDate: '2012-10-02',
    isActive: 'Active',
    experience: 8,
    role: 'HR',
    departmentId: 2,
    department: 'HR',
    address: 'Sreepuram',
    line1: 'Mavelikara',
    line2: 'Kannur'
  },
  {
    id: 6,
    name: 'Paul',
    joiningDate: '2012-11-01',
    isActive: 'Active',
    experience: 8,
    role: 'HR',
    departmentId: 2,
    department: 'HR',
    address: 'Sreepuram',
    line1: 'Mavelikara',
    line2: 'Bangalore'
  },
  {
    id: 8,
    name: 'Ted',
    joiningDate: '2012-11-01',
    isActive: 'InActive',
    experience: 8,
    role: 'HR',
    departmentId: 2,
    department: 'HR',
    address: 'Sreepuram',
    line1: 'Mavelikara',
    line2: 'Kolkata'
  }
];

const employeeReducer = createReducer(initialState, (builder) => {
  builder.addCase(addEmployee, (state, action) => {
    state = [...state, action.payload.employee];

    return state;
  });
  builder.addCase(editEmployee, (state, action) => {
    let newData = [...state];

    console.log('Reducer editing data...');
    const empWithIdIndex = newData.findIndex((obj) => obj.id === action.payload.employee.id);

    console.log(empWithIdIndex);
    if (empWithIdIndex > -1) newData.splice(empWithIdIndex, 1);

    newData = [...newData, action.payload.employee];

    return newData;
  });
});

// const employeeReducer = (state = initialState, action) => {
//   switch (action.type) {
//     case 'EMPLOYEE:CREATE': {
//       const newData = [...state, action.payload.employee];

//       return newData;
//     }
//     case 'EMPLOYEE:DELETE': {
//       const newData = [...state];

//       console.log('delete reducer');
//       const empWithIdIndex = newData.findIndex((obj) => obj.id === action.payload.id);

//       console.log(empWithIdIndex);
//       if (empWithIdIndex > -1) newData.splice(empWithIdIndex, 1);
//       console.log(state);

//       return newData;
//     }
//     case 'EMPLOYEE:EDIT': {
//       let newData = [...state];

//       console.log('Reducer editing data...');
//       const empWithIdIndex = newData.findIndex((obj) => obj.id === action.payload.employee.id);

//       console.log(empWithIdIndex);
//       if (empWithIdIndex > -1) newData.splice(empWithIdIndex, 1);

//       newData = [...newData, action.payload.employee];

//       return newData;
//     }

//     default:
//       return state;
//   }
// };

export default employeeReducer;
