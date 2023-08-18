import { useState, type FC, useEffect } from 'react';
import './login.css';
import Button from '../../Components/Button/button';
import Input from '../../Components/Input/input';
import { useNavigate } from 'react-router-dom';
import { useLoginMutation } from './api';

const Login: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setError] = useState(false);

  const navigate = useNavigate();
  const handleClick = () => {
    console.log('Clicked');
    if (username && password)
      login({
        email: username,
        password: password
      });
    else setError(true);
  };

  const [login, { data, isSuccess }] = useLoginMutation();

  useEffect(() => {
    if (isSuccess && data) {
      navigate('/employees');
      console.log(data);
      localStorage.setItem('AuthKey', data.data);
      localStorage.setItem('Role', data.employee.role);
    }
  }, [data, isSuccess]);

  return (
    <main>
      <section className='main-container'>
        <div className='left-section'>
          <img src='/assets/img/banner.png' alt='Login Page' />
        </div>
        <div className='right-section'>
          <img className='logo' src='/assets/img/kv-logo.png' alt='Kv logo' />
          {/* <div className='forms'> */}
          <Input
            // label='Username'
            placeholder='Username / Email'
            type='text'
            value={username}
            //onChange={handleOnChange}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            // label='Password'
            placeholder='Password'
            type='password'
            value={password}
            //onChange={handleOnChange}
            onChange={(e) => setPassword(e.target.value)}
          />
          <Button text='Login' type='enabled' onClick={handleClick} />
          {/* </div> */}
          {showError && <div>Username or Password Invalid !</div>}
        </div>
      </section>
    </main>
  );
};

export default Login;
