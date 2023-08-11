import SubHeader from '../../../Components/SubHeader/subheader';
import Header from '../../../Components/Header/header';
import SideNav from '../../../Components/SideNav/sidenav';
import React from 'react';
import Table from '../../../Components/Table/table';

// import Status from '../../../Components/Status/status';

const Employee: React.FC = () => {
  return (
    <div>
      <SideNav />
      <Header />
      <SubHeader label={'Employee Details'} />
      {/* <Status isActive={true} /> */}
      <Table />
    </div>
  );
};

export default Employee;
