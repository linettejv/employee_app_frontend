import React from 'react';
import './subheader.css';
const SubHeader: React.FC = () => {
  return (
    <div className='create-emp'>
      <p className='create-emp-text'>Create Employee</p>
      <div className='add-button-div'>
        <button className='add-button'>
          <img src='./assets/icons/add.png' alt='plus' />
        </button>
      </div>
    </div>
  );
};

export default SubHeader;
