import React from 'react';
import './employee-details.css';
import SideNav from '../../Components/SideNav/sidenav';
import Header from '../../Components/Header/header';
import SubHeader from '../../Components/SubHeader/subheader';
// import { data } from '../../data';
//import { useParams } from 'react-router-dom';
import DetailsCard from '../../Components/Details-Card/detailsCard';
import { useParams } from 'react-router-dom';
import data from '../../data';

const DetailsPage: React.FC = () => {
  const { id } = useParams();
  const emp = data.find((emp) => emp.id === Number(id));

  console.log(emp);

  return (
    <>
      <SideNav />
      <Header />
      <SubHeader label={'Employee Details Page'} />
      <div className='Card'>
        <DetailsCard label={'name'} data={emp.name} />
        <DetailsCard label={'Joining Date'} data={emp.joiningDate} />
        <DetailsCard label={'Experience'} data={emp.joiningDate} />
        <DetailsCard label={'Role'} data={emp.role} />
        <DetailsCard label={'Emp Id'} data={String(emp.id)} />
      </div>
    </>
  );
};

export default DetailsPage;