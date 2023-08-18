import React from 'react';
import './status.css';

type StatusProps = {
  isActive: string;
};
const Status: React.FC<StatusProps> = (props) => {
  const statusCode = {
    active: {
      label: 'Active',
      color: '#D3F4BE'
    },
    inactive: {
      label: 'InActive',
      color: '#FFBFBF'
    },
    probation: {
      label: 'Probation',
      color: '#F5ECB8'
    }
  };

  return (
    <>
      {props.isActive === 'Active' && (
        <div className='status' style={{ backgroundColor: statusCode.active.color }}>
          {statusCode.active.label}
        </div>
      )}
      {props.isActive === 'Probation' && (
        <div className='status' style={{ backgroundColor: statusCode.probation.color }}>
          {statusCode.probation.label}
        </div>
      )}

      {props.isActive === 'InActive' && (
        <div className='status' style={{ backgroundColor: statusCode.inactive.color }}>
          {statusCode.inactive.label}
        </div>
      )}
    </>
  );
};

export default Status;
