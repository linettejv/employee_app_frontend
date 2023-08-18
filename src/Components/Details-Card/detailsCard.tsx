// import Status from '../Status/status';
import Status from '../Status/status';
import './detailsCard.css';
import React from 'react';

export type DetailsCardPropsTypes = {
  label: string;
  data: string;
};

const DetailsCard: React.FC<DetailsCardPropsTypes> = (props) => {
  let showlabel;

  if (props.label === 'Status') showlabel = true;

  return (
    <div data-testid='DC-div' className='card'>
      <div data-testid='DC-label' className='label'>
        {props.label}
      </div>
      <div data-testid='DC-data' className='data'>
        {showlabel && <Status isActive={props.data} />}
        {!showlabel && props.data}
      </div>
    </div>
  );
};

export default DetailsCard;
