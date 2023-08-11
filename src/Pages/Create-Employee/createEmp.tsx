import React from 'react';
import './createEmp.css';
import SideNav from '../../Components/SideNav/sidenav';
import Header from '../../Components/Header/header';
import SubHeader from '../../Components/SubHeader/subheader';

const CreateEmp = () => {
  return (
    <>
      <SideNav />
      <Header />
      <SubHeader label={'Create Employee'} />
    </>
  );
};

export default CreateEmp;
