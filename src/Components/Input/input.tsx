import './input.css';
import React from 'react';

export type InputPropsTypes = {
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
      <label data-testid='input-test-on-label'>{props.label}</label>
      <input
        type={props.type}
        onChange={props.onChange}
        value={props.value}
        placeholder={props.placeholder}
        disabled={props.disabled}
        data-testid='input-test'
      />
    </div>
  );
};

export default Input;
