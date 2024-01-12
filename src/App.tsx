import React from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LoginViewController from './presentation/modules/Login/LoginViewController';
import HomeViewController from './presentation/modules/Home/HomeViewController';
import MyAccountViewController from './presentation/modules/MyAccount/MyAccountViewController';
import UserViewController from './presentation/modules/Users/UserViewController';
import RoleViewController from './presentation/modules/Roles/RoleViewController';
import MyFilesViewController from './presentation/modules/MyFiles/MyFilesViewController';
import UploadFileViewController from './presentation/modules/UploadFile/UploadFileViewController';
import SinginViewController from './presentation/modules/Singin/SinginViewController';

import LandingViewController from './presentation/modules/Landing/LandingViewController';
import TemplateViewController from './presentation/modules/Templates/TemplateViewController';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/signin" element={<LoginViewController />} />
        <Route path="/home" element={<HomeViewController />} />
        <Route path="/my-account" element={<MyAccountViewController />} />
        <Route path="/users" element={<UserViewController />} />
        <Route path="/roles" element={<RoleViewController />} />
        <Route path="/my-files" element={<MyFilesViewController />} />
        <Route path="/upload" element={<UploadFileViewController />} />
        <Route path="/sing-in" element={<SinginViewController />} />

        <Route path='/' element={<LandingViewController />} />
        <Route path='/download-templates' element={<TemplateViewController />} />
      </Routes>
    </Router>
  );
}

export default App;
