import React, { useState } from 'react';
import './createEmp.css';
import SideNav from '../../Components/SideNav/sidenav';
import Header from '../../Components/Header/header';
import SubHeader from '../../Components/SubHeader/subheader';
import Input from '../../Components/Input/input';
import DropDown from '../../Components/Drop-Down/dropDown';
// import Button from '../../Components/Button/button';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const CreateEmp = () => {
  const dispatch = useDispatch();
  let i = 9;

  const handleSubmit = () => {
    console.log(newdata);
    dispatch({
      type: 'EMPLOYEE:CREATE',
      payload: {
        employee: {
          id: ++i,
          name: newdata.name,
          joiningDate: newdata.joining_date,
          experience: newdata.experience,
          isActive: newdata.status,
          role: newdata.role,
          departmentId: newdata.department,
          address: newdata.flat_house,
          line1: newdata.add_line1,
          line2: newdata.add_line2
        }
      }
    });
    navigate('/employees');
  };
  const [newdata, setdata] = useState({
    name: '',
    joining_date: '',
    experience: '',
    department: '',
    role: '',
    status: '',
    flat_house: '',
    add_line1: '',
    add_line2: ''
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
            options={['Active', 'In-Active']}
            onChange={(e) => handleOnChange('status', e.target.value)}
          />
        </div>
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
