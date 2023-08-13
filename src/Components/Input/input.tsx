import './input.css';
import React from 'react';

type InputPropsTypes = {
  label?: string;
  value: string;
  placeholder: string;
  type: 'text' | 'password';
  onChange?: (e) => void;
  disabled?: boolean;
};

const Input: React.FC<InputPropsTypes> = (props) => {
  return (
    <div className='input'>
      <label>{props.label}</label>
      <input
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        disabled={props.disabled}
      />
    </div>
  );
};

export default Input;
