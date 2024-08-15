import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './userModule/login.jsx';
import Dashboard from './dashboard.jsx';
import Admin from './admin.jsx';
import AddUser from './userModule/addUser.jsx';
import Edituser from './userModule/editUser.jsx'

// Assume you have a dashboard component

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />         
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/admin" element={<Admin/>} />
            <Route path="/addUser" element={<AddUser />} />
            <Route path="/editUser" element={<Edituser />} />
          
            <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Routes>
    );
};

export default AppRoutes;
