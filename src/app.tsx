import type { FC } from 'react';
import './styles/global.css';

import Login from './Pages/login/Login';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Employee from './Pages/Employee/Employee/employee';
import DetailsPage from './Pages/Employee-Details/employee-details';
import CreateEmp from './Pages/Create-Employee/createEmp';
import EditEmp from './Pages/Edit-Employee/edit';

const App: FC = () => {
  return (
    <div className='App'>
      <BrowserRouter>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/employees' element={<Employee />} />
          <Route path='/employees/:id' element={<DetailsPage />} />
          <Route path='/create-employee' element={<CreateEmp />} />
          <Route path='/edit-employee/:id' element={<EditEmp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
