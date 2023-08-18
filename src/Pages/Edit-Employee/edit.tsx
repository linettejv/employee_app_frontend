import React, { useState } from 'react';
import './edit.css';
import SideNav from '../../Components/SideNav/sidenav';
import Header from '../../Components/Header/header';
import SubHeader from '../../Components/SubHeader/subheader';
import Input from '../../Components/Input/input';
import { useNavigate, useParams } from 'react-router-dom';
// import data from '../../data';
import DropDown from '../../Components/Drop-Down/dropDown';
// import { useDispatch } from 'react-redux';
// import { editEmployee } from '../../Actions/employeesAction';
import { useGetEmployeeByIdQuery, useUpdateEmployeeMutation } from '../Employee/Employee/api';

const EditEmp = () => {
  // const employeesData = useSelector((state: any) => {
  //   return state.employees;
  // });

  const { id } = useParams();
  /// const emp = employeesData?.find((emp) => emp.id === Number(id));
  const { data } = useGetEmployeeByIdQuery(Number(id));

  console.log('data' + data);
  if (!data) return <div>loading</div>;

  const emp = data.employee;

  console.log('fetched employee' + emp);
  const [editData, setdata] = useState({
    id: emp.id,
    name: emp.name,
    joining_date: emp.joining_date,
    isActive: emp.status,
    experience: emp.experience,
    role: emp.role,
    department_id: emp.department_id,
    address: {
      City: emp.address.City,
      Country: emp.address.Country,
      line1: emp.address.line1,
      address_line2: emp.address.address_line2
    },
    department: emp.department
  });

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/employees');
  };

  const [updateEmployee] = useUpdateEmployeeMutation();

  // const dispatch = useDispatch();
  const handleSubmit = () => {
    console.log(editData);
    updateEmployee({
      id: editData.id,
      name: editData.name,
      joining_date: editData.joining_date,
      status: editData.isActive,
      experience: editData.experience,
      role: editData.role,
      department_id: editData.department_id,
      department: editData.department,
      address: {
        City: editData.address.City,
        Country: editData.address.Country,
        line1: 'Line 1',
        address_line2: editData.address.address_line2,
        pincode: '680011'
      },
      email: emp.email,
      password: emp.password
    });
    navigate('/employees');
  };

  const handleOnChange = (key, value) => {
    console.log(value);
    const tempData = { ...editData };

    tempData[key] = value;
    setdata(tempData);
  };

  return (
    <div className='main'>
      <SideNav />
      <Header />
      <SubHeader label={'Edit Employee'} />

      <div className='form-outer'>
        <div className='line-1'>
          <Input
            label='Employee name'
            placeholder={editData.name}
            type='text'
            onChange={(e) => handleOnChange('name', e.target.value)}
            value={editData.name}
          />
          <Input
            label='Joining Date'
            placeholder={editData.joining_date}
            type='text'
            onChange={(e) => handleOnChange('joiningDate', e.target.value)}
            value={editData.joining_date}
          />
          <Input
            label='Experience'
            placeholder={String(editData.experience)}
            type='text'
            onChange={(e) => handleOnChange('experience', e.target.value)}
            value={String(editData.experience)}
          />
        </div>
        <div className='line-2'>
          <DropDown
            label='Department'
            options={['HR', 'Front-end', 'Back-end', 'Dev-Ops', 'QA']}
            onChange={(e) => handleOnChange('department', e.target.value)}
          />
          <DropDown
            label='Role'
            options={['Fresher', 'Intern', 'SDE-1', 'SDE-2', 'Manager']}
            onChange={(e) => handleOnChange('role', e.target.value)}
          />
          <DropDown
            label='Status'
            options={['Active', 'In-Active', 'Probation']}
            onChange={(e) => handleOnChange('isActive', e.target.value)}
          />
        </div>
        <div className='last-line'>
          <div className='line-3'>
            <Input
              label='Address'
              placeholder='Flat No./House No.'
              type='text'
              onChange={(e) => handleOnChange('address', e.target.value)}
              value={editData.address.line1}
            />
            <Input
              placeholder='Address line 1'
              type='text'
              onChange={(e) => handleOnChange('line1', e.target.value)}
              value={editData.address.address_line2}
            />
            <Input
              placeholder='Address line 2'
              type='text'
              onChange={(e) => handleOnChange('line2', e.target.value)}
              value={editData.address.City}
            />
          </div>
          <div className='line-empId'>
            <Input
              label='Employee Id'
              placeholder={String(emp.id)}
              type='text'
              disabled={true}
              value={String(emp.id)}
            />
          </div>
        </div>
        <div className='line-4'>
          <button className='Button-submit' onClick={handleSubmit}>
            Submit
          </button>
          <button className='button-cancel' onClick={handleClick}>
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditEmp;
