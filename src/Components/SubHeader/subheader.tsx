import React from 'react';
import './subheader.css';
import { useNavigate } from 'react-router-dom';

type SubHeaderPropsTypes = {
  label: string;
};

const SubHeader: React.FC<SubHeaderPropsTypes> = (props) => {
  const navigate = useNavigate();
  const HandleNavigate = () => {
    navigate(`/create-employee`);
    console.log('create button clicked');
  };

  return (
    <div className='create-emp'>
      <p className='create-emp-text'>{props.label}</p>
      <div className='add-button-div'>
        <button className='add-button' onClick={HandleNavigate}>
          <img src='./assets/icons/add.png' alt='plus' />
        </button>
      </div>
    </div>
  );
};

export default SubHeader;
