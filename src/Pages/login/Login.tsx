import { useState, type FC } from 'react';
import './login.css';

import Button from '../../Components/Button/button';
import Input from '../../Components/Input/input';
import { useNavigate } from 'react-router-dom';

const Login: FC = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showError, setError] = useState(false);

  const navigate = useNavigate();
  const handleClick = () => {
    console.log('Clicked');
    if (username && password) navigate('/employees');
    else setError(true);
  };

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
