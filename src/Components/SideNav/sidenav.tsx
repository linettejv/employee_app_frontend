import React from 'react';
import './sidenav.css';
import { useNavigate } from 'react-router-dom';

type SideNavPropsTypes = {};

const SideNav: React.FC<SideNavPropsTypes> = () => {
  const nav = useNavigate();
  const handleClick = () => {
    console.log('side nav hello');
    nav('/employees');
    nav(0);
  };

  return (
    <aside>
      <div className='div1'>
        <img className='top-logo' src='/assets/img/kv-logo.png' alt='logo' />
      </div>
      <div className='sidebar'>
        <div className='sidebar1' onClick={handleClick}>
          <img className='icon-em' src='/assets/img/icon.svg' alt='icon-em' />
          <p className='emp-list'>Employee List</p>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
