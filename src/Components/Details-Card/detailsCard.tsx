import './detailsCard.css';
import React from 'react';

export type DetailsCardPropsTypes = {
  label: string;
  data: string;
};

const DetailsCard: React.FC<DetailsCardPropsTypes> = (props) => {
  return (
    <div data-testid='DC-div' className='card'>
      <div data-testid='DC-label' className='label'>
        {props.label}
      </div>
      <div data-testid='DC-data' className='data'>
        {props.data}
      </div>
    </div>
  );
};

export default DetailsCard;
