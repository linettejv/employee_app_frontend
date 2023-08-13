import './detailsCard.css';
import React from 'react';

type DetailsCardPropsTypes = {
  label: string;
  data: string;
};

const DetailsCard: React.FC<DetailsCardPropsTypes> = (props) => {
  return (
    <div className='card'>
      <div className='label'>{props.label}</div>
      <div className='data'>{props.data}</div>
    </div>
  );
};

export default DetailsCard;
