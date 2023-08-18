import React from 'react';
import './table.css';
import Status from '../Status/status';
import { useNavigate } from 'react-router-dom';
import { useGetEmployeeListQuery } from '../../Pages/Employee/Employee/api';

const Table = (props) => {
  const { data } = useGetEmployeeListQuery();

  console.log(props);
  const onDeleteClick = (e, id) => {
    console.log('to pop up');

    e.stopPropagation();
    props.deleteId.current = id;

    return props.onDeleteClick(true);
  };

  let showActions = false;

  if (localStorage.getItem('Role') === 'HR') showActions = true;

  const headValues = [
    'Employee Name ',
    'Employee Id',
    'Joining Date',
    'Department',
    'Status',
    'Experience',
    'Action'
  ];

  const navigate = useNavigate();
  const HandleNavigate = (id) => {
    navigate(`/employees/${id}`);
  };

  const HandleEditNavigate = (e, id) => {
    navigate(`/edit-employee/${id}`);
    e.stopPropagation();
  };

  if (!data) return <div>loading</div>;

  return (
    <>
      <table className='table'>
        <thead className='header'>
          <tr className='header-row'>
            {headValues.map((val) => (
              <td className='data' key={val}>
                {val}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.employees.map((row) => (
            <tr className='rows' key={row.id} onClick={() => HandleNavigate(row.id)}>
              <td className='data'>{row.name}</td>
              <td className='data'>{row.id}</td>
              <td className='data'>{row.joining_date}</td>
              <td className='data'>{row.role}</td>
              <td className='data'>
                <Status isActive={row.status} />
              </td>
              <td className='data'>{row.experience}</td>
              {showActions && (
                <td>
                  <div className='edit-div'>
                    <img
                      className='delete-img'
                      src='./assets/img/delete.png'
                      onClick={(e) => onDeleteClick(e, row.id)}
                    />
                    <img
                      className='edit-img'
                      src='./assets/img/edit.png'
                      onClick={(e) => HandleEditNavigate(e, row.id)}
                    />
                  </div>
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
