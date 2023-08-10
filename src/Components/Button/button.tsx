import './button.css';
import React from 'react';

type ButtonPropsTypes = {
  text: string;
  type: 'enabled' | 'disabled';
  onClick: (e) => void;
};

const Button: React.FC<ButtonPropsTypes> = (props) => {
  return <button onClick={props.onClick}>{props.text}</button>;
};

export default Button;
