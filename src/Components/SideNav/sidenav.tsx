import React from 'react';
import './sidenav.css';

type SideNavPropsTypes = {};

const SideNav: React.FC<SideNavPropsTypes> = () => {
  return (
    <aside>
      <div className='div1'>
        <img className='top-logo' src='/assets/img/kv-logo.png' alt='logo' />
      </div>
      <div className='sidebar'>
        <div className='sidebar1'>
          <img className='icon-em' src='/assets/img/icon.svg' alt='icon-em' />
          <p className='emp-list'>Employee List</p>
        </div>
      </div>
    </aside>
  );
};

export default SideNav;
