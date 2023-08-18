import React from 'react';
import './employee-details.css';
import SideNav from '../../Components/SideNav/sidenav';
import Header from '../../Components/Header/header';
import SubHeader from '../../Components/SubHeader/subheader';
import DetailsCard from '../../Components/Details-Card/detailsCard';
import { useParams } from 'react-router-dom';
import { useGetEmployeeByIdQuery } from '../Employee/Employee/api';

const DetailsPage: React.FC = () => {
  const { id } = useParams();

  let HaveDiv = false;

  if (localStorage.getItem('Role') === 'HR') HaveDiv = true;

  console.log(id);

  const { data } = useGetEmployeeByIdQuery(Number(id));

  console.log(data);
  if (!data) return <div>loading</div>;

  const emp = data.employee;

  return (
    <div className='main'>
      <SideNav />
      <Header />
      <SubHeader
        label={'Employee Details Page'}
        haveDiv={HaveDiv}
        sideBlueLabel='Edit'
        imgScr='/assets/icons/edit.svg'
        navigatePath={`/edit-employee/${id}`}
      />
      <div className='Card'>
        <DetailsCard label={'Employee Name'} data={emp.name} />
        <DetailsCard label={'Joining Date'} data={emp.joining_date} />
        <DetailsCard label={'Status'} data={emp.status} />
        {/* <div className='status'>
          <Status isActive={emp.status} />
        </div> */}
        <DetailsCard label={'Experience'} data={String(emp.experience)} />
        <DetailsCard label={'Department'} data={emp.role} />
        <DetailsCard label={'Emp Id'} data={String(emp.id)} />
        <DetailsCard
          label={'Employee Address'}
          data={`${emp.address.line1},${emp.address.address_line2},${emp.address.City}`}
        />
      </div>
    </div>
  );
};

export default DetailsPage;
