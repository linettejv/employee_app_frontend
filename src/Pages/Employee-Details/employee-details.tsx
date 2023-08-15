import React from 'react';
import './employee-details.css';
import SideNav from '../../Components/SideNav/sidenav';
import Header from '../../Components/Header/header';
import SubHeader from '../../Components/SubHeader/subheader';
// import { data } from '../../data';
//import { useParams } from 'react-router-dom';
import DetailsCard from '../../Components/Details-Card/detailsCard';
import { useParams } from 'react-router-dom';
import { useSelector } from 'react-redux';

const DetailsPage: React.FC = () => {
  const employeesData = useSelector((state: any) => {
    console.log(state.employees);

    return state.employees;
  });
  const { id } = useParams();
  // data.find
  const emp = employeesData.find((emp) => emp.id === Number(id));

  console.log(emp);

  return (
    <div className='main'>
      <SideNav />
      <Header />
      <SubHeader
        label={'Employee Details Page'}
        haveDiv={true}
        sideBlueLabel='Edit'
        imgScr='/assets/icons/edit.svg'
        navigatePath={`/edit-employee/${id}`}
      />
      <div className='Card'>
        <DetailsCard label={'Employee Name'} data={emp.name} />
        <DetailsCard label={'Joining Date'} data={emp.joiningDate} />
        <DetailsCard label={'Experience'} data={emp.joiningDate} />
        <DetailsCard label={'Experience'} data={emp.joiningDate} />
        <DetailsCard label={'Role'} data={emp.role} />
        <DetailsCard label={'Emp Id'} data={String(emp.id)} />
        <DetailsCard label={'Employee Address'} data={String(emp.address)} />
      </div>
    </div>
  );
};

export default DetailsPage;
