import React from 'react';
import './dropDown.css';
export type DropDownProps = {
  label: string;
  options: string[];
  handleSelected?: (e) => void;
};
const DropDown: React.FC<DropDownProps> = (props) => {
  const handleSelected = (e) => {
    console.log(e);
  };

  return (
    <div data-testid='dropdown-div' className='dropDown'>
      <label data-testid='dropdown-label'>{props.label}</label>
      <select data-testid='dropdown-select' onChange={handleSelected}>
        {props.options}
        {props.options.map((item) => (
          <option data-testid='dropdown-option' key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
