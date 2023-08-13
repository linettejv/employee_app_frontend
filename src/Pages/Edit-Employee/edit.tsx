import React, { useState } from 'react';
import './edit.css';
import SideNav from '../../Components/SideNav/sidenav';
import Header from '../../Components/Header/header';
import SubHeader from '../../Components/SubHeader/subheader';
import Input from '../../Components/Input/input';
import { useNavigate, useParams } from 'react-router-dom';
import data from '../../data';
import DropDown from '../../Components/Drop-Down/dropDown';

const EditEmp = () => {
  const { id } = useParams();
  const emp = data.find((emp) => emp.id === Number(id));

  console.log(emp);
  const [editData, setdata] = useState(emp);

  const navigate = useNavigate();
  const handleClick = () => {
    navigate('/employees');
  };

  const handleOnChange = (key, value) => {
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
            placeholder={editData.joiningDate}
            type='text'
            onChange={(e) => handleOnChange('joining_date', e.target.value)}
            value={editData.joiningDate}
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
          <DropDown label='Department' options={['HR', 'Front-end', 'Back-end', 'Dev-Ops', 'QA']} />
          <DropDown label='Role' options={['Fresher', 'Intern', 'SDE-1', 'SDE-2', 'Manager']} />
          <DropDown label='Status' options={['Active', 'In-Active']} />
        </div>
        <div className='last-line'>
          <div className='line-3'>
            <Input
              label='Address'
              placeholder='Flat No./House No.'
              type='text'
              onChange={(e) => handleOnChange('flat_house', e.target.value)}
              value={editData.address}
            />
            <Input
              placeholder='Address line 1'
              type='text'
              onChange={(e) => handleOnChange('add_line1', e.target.value)}
              value={editData.line1}
            />
            <Input
              placeholder='Address line 2'
              type='text'
              onChange={(e) => handleOnChange('add_line2', e.target.value)}
              value={editData.line2}
            />
          </div>
          <div className='line-empId'>
            <Input
              label='Employee Id'
              placeholder={String(editData.id)}
              type='text'
              disabled={true}
              value={String(editData.id)}
            />
          </div>
        </div>
        <div className='line-4'>
          <button className='Button-submit' onClick={handleClick}>
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
