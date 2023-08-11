import './detailsCard.css';
import React from 'react';

type DetailsCardPropsTypes = {
  label: string;
  data: string;
};

const DetailsCard: React.FC<DetailsCardPropsTypes> = (props) => {
  return (
    <div className='card'>
      <div>{props.label}</div>
      <div>{props.data}</div>
    </div>
  );
};

export default DetailsCard;
