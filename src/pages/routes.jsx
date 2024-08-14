import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import Login from './userModule/login.jsx';
// Assume you have a dashboard component

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />         
            <Route path="/" element={<Navigate to="/login" />} />
            {/* 404 Route */}
            <Route path="*" element={<h1>404: Page Not Found</h1>} />
        </Routes>
    );
};

export default AppRoutes;
