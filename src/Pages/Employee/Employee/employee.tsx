import SubHeader from '../../../Components/SubHeader/subheader';
import Header from '../../../Components/Header/header';
import SideNav from '../../../Components/SideNav/sidenav';
import React from 'react';
import Table from '../../../Components/Table/table';
import './employee.css';

// ---------------------This Page shows the employees list --------------------------

const Employee: React.FC = () => {
  return (
    <div className='main'>
      <SideNav />
      <Header />
      <SubHeader
        label={'Employee Details'}
        haveDiv={true}
        sideBlueLabel='Create Employee'
        imgScr='./assets/icons/+.png'
        navigatePath='/create-employee'
      />
      <Table />
    </div>
  );
};

export default Employee;
