import React from 'react';
import './status.css';

type StatusProps = {
  isActive: boolean;
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
    }
  };

  return (
    <>
      {props.isActive && (
        <div className='status' style={{ backgroundColor: statusCode.active.color }}>
          {statusCode.active.label}
        </div>
      )}

      {!props.isActive && (
        <div className='status' style={{ backgroundColor: statusCode.inactive.color }}>
          {statusCode.inactive.label}
        </div>
      )}
    </>
  );
};

export default Status;
