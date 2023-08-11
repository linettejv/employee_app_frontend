import React from 'react';
import './table.css';
import Status from '../Status/status';

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

  const data = [
    {
      id: 4,
      name: 'linette',
      joiningDate: '2011-10-02T00:00:00.000Z',
      isActive: false,
      experience: 9,
      role: 'Developer',
      departmentId: 3
    },
    {
      id: 3,
      name: 'devi',
      joiningDate: '2011-10-02T00:00:00.000Z',
      isActive: true,
      experience: 9,
      role: 'HR',
      departmentId: 3
    },
    {
      id: 1,
      name: 'Ashok',
      joiningDate: '2012-10-02T00:00:00.000Z',
      isActive: true,
      experience: 8,
      role: 'HR',
      departmentId: 2
    },
    {
      id: 6,
      name: 'Ashok k',
      joiningDate: '2012-11-01T18:30:00.000Z',
      isActive: false,
      experience: 8,
      role: 'HR',
      departmentId: 2
    },
    {
      id: 8,
      name: 'Ashok',
      joiningDate: '2012-11-01T18:30:00.000Z',
      isActive: true,
      experience: 8,
      role: 'HR',
      departmentId: 2
    }
  ];

  return (
    <>
      <table className='table'>
        <thead className='header'>
          <tr className='rows'>
            {headValues.map((val) => (
              <td className='data' key={val}>
                {val}
              </td>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row) => (
            <tr className='rows' key={row.id}>
              <td className='data'>{row.name}</td>
              <td className='data'>{row.id}</td>
              <td className='data'>{row.joiningDate}</td>
              <td className='data'>{row.role}</td>
              <td className='data'>
                <Status isActive={row.isActive} />
              </td>
              <td className='data'>{row.experience}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default Table;
