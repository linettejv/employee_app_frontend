import type { FC } from 'react';
import './styles/global.css';

import Login from './Pages/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Employee from './Pages/Employee/Employee/employee';

const App: FC = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/employees' element={<Employee />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
