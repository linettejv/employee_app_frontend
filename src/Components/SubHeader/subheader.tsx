import React from 'react';
import './subheader.css';
import { useNavigate } from 'react-router-dom';

export type SubHeaderPropsTypes = {
  label: string;
  haveDiv?: boolean;
  sideBlueLabel?: string | boolean;
  imgScr?: string;
  navigatePath?: string;
};
const SubHeader: React.FC<SubHeaderPropsTypes> = (props) => {
  const navigate = useNavigate();
  const HandleNavigate = () => {
    navigate(`${props.navigatePath}`);
  };

  return (
    <div className='create-emp'>
      <p className='create-emp-text'>{props.label}</p>
      {props.haveDiv && (
        <div data-testid='div-test' className='side-blue'>
          <div className='add-button-div'>
            <button data-testid='div-test-button' className='add-button' onClick={HandleNavigate}>
              <img className='img' src={props.imgScr} alt='plus' />
            </button>
          </div>
          <div className='text'> {props.sideBlueLabel} </div>
        </div>
      )}
    </div>
  );
};

export default SubHeader;
