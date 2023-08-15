import React from 'react';
import './table.css';
import Status from '../Status/status';
import { useNavigate } from 'react-router-dom';
// import data from '../../data';
import { useDispatch, useSelector } from 'react-redux';

const Table: React.FC = () => {
  const employeesData = useSelector((state: any) => {
    console.log(state.employees);

    return state.employees;
  });

  const dispatch = useDispatch();

  const headValues = [
    'Employee Name ',
    'Employee Id',
    'Joining Date',
    'Role',
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

  const HandleDeleteNavigate = (e, id) => {
    console.log(id);
    dispatch({
      type: 'EMPLOYEE:DELETE',
      payload: {
        id: id
      }
    });
    e.stopPropagation();
  };

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
          {employeesData.map((row) => (
            <tr className='rows' key={row.id} onClick={() => HandleNavigate(row.id)}>
              <td className='data'>{row.name}</td>
              <td className='data'>{row.id}</td>
              <td className='data'>{row.joiningDate}</td>
              <td className='data'>{row.role}</td>
              <td className='data'>
                <Status isActive={row.isActive} />
              </td>
              <td className='data'>{row.experience}</td>
              <td>
                <div className='edit-div'>
                  <img
                    className='delete-img'
                    src='./assets/img/delete.png'
                    onClick={(e) => HandleDeleteNavigate(e, row.id)}
                  />
                  <img
                    className='edit-img'
                    src='./assets/img/edit.png'
                    onClick={(e) => HandleEditNavigate(e, row.id)}
                  />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
