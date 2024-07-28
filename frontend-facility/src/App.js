import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FacilityForm from './components/facility/FacilityForm';
import LoginPage from './components/login/LoginPage';
import ManagerLogin from './components/login/ManagerLogin';
import ResidentLogin from './components/login/ResidentLogin';
import ManagerRegistrationForm from './components/manager/ManagerRegistrationForm';
import ResidentRegistrationForm from './components/Resident/ResidentRegistrationForm';

function App() {

  return (
        <Routes>
          <Route path= "/login" Component={LoginPage} />
          <Route path="/manager/login" Component={ManagerLogin} />
          <Route path="/resident/login" Component={ResidentLogin} />
          <Route path="/register-manager" Component={ManagerRegistrationForm} />
          <Route path="/approve-resident" Component={}
          <Route path="/create-facility" Component={FacilityForm} />
          <Route path="/register-resident" Component={ResidentRegistrationForm} />
        </Routes>
  );
}

export default App;
