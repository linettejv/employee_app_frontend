import SubHeader from '../../../Components/SubHeader/subheader';
import Header from '../../../Components/Header/header';
import SideNav from '../../../Components/SideNav/sidenav';
import React, { useRef, useState } from 'react';
import Table from '../../../Components/Table/table';
import './employee.css';
import DeletePopup from '../../../Components/Delete-PopUp/deletepopup';

import { useGetEmployeeListQuery } from './api';

// ---------------------This Page shows the employees list --------------------------

const Employee: React.FC = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  const deleteid = useRef(0);

  const role = localStorage.getItem('Role');
  let HaveDiv = false;

  if (role === 'HR') HaveDiv = true;

  const { data } = useGetEmployeeListQuery();

  console.log('hello', data);

  return (
    <div className='main'>
      <SideNav />
      <div>
        <Header />
        <SubHeader
          label={'Employee Details'}
          haveDiv={HaveDiv}
          sideBlueLabel='Create Employee'
          imgScr='./assets/icons/+.png'
          navigatePath='/create-employee'
        />
        <Table onDeleteClick={setShowPopUp} deleteId={deleteid} />
      </div>
      {showPopUp && <DeletePopup onDeleteClick={setShowPopUp} deleteId={deleteid} />}
    </div>
  );
};

export default Employee;
