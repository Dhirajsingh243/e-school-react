import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './pages/routes.jsx'; // Import the updated Routes component

function App() {
    return (
        <Router>
            <AppRoutes />
        </Router>
    );
}

export default App;
