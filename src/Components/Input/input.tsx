// import './styles.css';
import React from 'react';

type InputPropsTypes = {
  //label: string;
  value: string;
  placeholder: string;
  type: 'text' | 'password';
  onChange: (e) => void;
};

const Input: React.FC<InputPropsTypes> = (props) => {
  return (
    <div className='input'>
      {/* <label>{props.label}</label> */}
      <input
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
      />
    </div>
  );
};

export default Input;
