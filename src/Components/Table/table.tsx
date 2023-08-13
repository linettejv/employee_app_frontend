import React from 'react';
import './table.css';
import Status from '../Status/status';
import { useNavigate } from 'react-router-dom';
import data from '../../data';

const Table: React.FC = () => {
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
          {data.map((row) => (
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
                  <img className='delete-img' src='./assets/img/delete.png' />
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
