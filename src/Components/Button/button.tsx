import './button.css';
import React from 'react';

export type ButtonPropsTypes = {
  text: string;
  type: 'enabled' | 'disabled';
  onClick?: (e) => void;
};

const Button: React.FC<ButtonPropsTypes> = (props) => {
  return (
    <button onClick={props.onClick} data-testid='button-test'>
      {props.text}
    </button>
  );
};

export default Button;
