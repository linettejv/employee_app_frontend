import React from 'react';
import './dropDown.css';
type DropDownProps = {
  label: string;
  options: string[];
  onChange?: (e) => void;
};
const DropDown: React.FC<DropDownProps> = (props) => {
  // const handleSelected = (e) => props.onChange(e.target.value);

  //const [department, setDepartment] = useState('');
  //const [role, setRole] = useState('');
  //const [status, setStatus] = useState('');
  return (
    <div className='dropDown'>
      <label>{props.label}</label>
      <select onChange={props.onChange}>
        {props.options}
        {props.options.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropDown;
