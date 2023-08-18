import React, { useState } from 'react';
import './createEmp.css';
import SideNav from '../../Components/SideNav/sidenav';
import Header from '../../Components/Header/header';
import SubHeader from '../../Components/SubHeader/subheader';
import Input from '../../Components/Input/input';
import DropDown from '../../Components/Drop-Down/dropDown';
import { useNavigate } from 'react-router-dom';
// import { useDispatch } from 'react-redux';
// import { addEmployee } from '../../Actions/employeesAction';
import { useCreateEmployeeMutation, useGetDepartmentsQuery } from '../Employee/Employee/api';

const CreateEmp = () => {
  // const dispatch = useDispatch();
  var i = 10;
  // create a state to store employee id

  const [createEmployee] = useCreateEmployeeMutation();

  const { data } = useGetDepartmentsQuery();

  if (data) console.log(data);

  let deptArr = [];

  if (data) data.forEach((dept) => deptArr.push(dept.name));
  console.log('departments ', deptArr);

  const handleSubmit = () => {
    console.log(newdata);
    console.log('current id :', i);
    createEmployee({
      name: newdata.name,
      joining_date: newdata.joining_date,
      status: newdata.isActive,
      experience: Number(newdata.experience),
      role: newdata.role,
      department_id: 2,
      department: newdata.department,
      address: {
        City: 'Thrissur',
        Country: 'India',
        line1: newdata.add_line1,
        address_line2: newdata.add_line2,
        State: newdata.flat_house,
        pincode: '680001'
      },
      email: newdata.username,
      password: newdata.password
    });
    navigate('/employees');
  };
  const [newdata, setdata] = useState({
    name: '',
    joining_date: '',
    experience: '',
    department: '',
    role: '',
    isActive: '',
    flat_house: '',
    add_line1: '',
    add_line2: '',
    username: '',
    password: ''
  });

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/employees');
  };

  const handleOnChange = (key, value) => {
    const tempData = { ...newdata };

    tempData[key] = value;
    setdata(tempData);
  };

  return (
    <div className='main'>
      <SideNav />
      <Header />
      <SubHeader label={'Create Employee'} />

      <div className='form-outer'>
        <div className='line-1'>
          <Input
            label='Employee name'
            placeholder='Name'
            type='text'
            onChange={(e) => handleOnChange('name', e.target.value)}
            value={newdata.name}
          />
          <Input
            label='Joining Date'
            placeholder='Joining Date'
            type='text'
            onChange={(e) => handleOnChange('joining_date', e.target.value)}
            value={newdata.joining_date}
          />
          <Input
            label='Experience'
            placeholder='Experience'
            type='text'
            onChange={(e) => handleOnChange('experience', e.target.value)}
            value={newdata.experience}
          />
        </div>
        <div className='line-2'>
          <DropDown
            label='Work status'
            options={['Fresher', 'Intern', 'SDE-1', 'SDE-2', 'Manager']}
            onChange={(e) => handleOnChange('department', e.target.value)}
          />
          <DropDown
            label='Department'
            options={deptArr}
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
              onChange={(e) => handleOnChange('flat_house', e.target.value)}
              value={newdata.flat_house}
            />
            <Input
              placeholder='Address line 1'
              type='text'
              onChange={(e) => handleOnChange('add_line1', e.target.value)}
              value={newdata.add_line1}
            />
            <Input
              placeholder='Address line 2'
              type='text'
              onChange={(e) => handleOnChange('add_line2', e.target.value)}
              value={newdata.add_line2}
            />
          </div>
          <div className='line-id'>
            <Input
              label='Email'
              placeholder='email-username'
              type='text'
              onChange={(e) => handleOnChange('username', e.target.value)}
              value={newdata.username}
            />
            <Input
              label='Password'
              placeholder='password'
              type='text'
              onChange={(e) => handleOnChange('password', e.target.value)}
              value={newdata.password}
            />
          </div>
        </div>
        <div className='line-4'>
          <button className='Button-submit' onClick={handleSubmit}>
            {/* it was onClick before */}
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

export default CreateEmp;
