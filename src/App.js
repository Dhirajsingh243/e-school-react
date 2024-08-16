import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './pages/routes.jsx'; // Import the updated Routes component

import Footer from './pages/elements/footer.jsx';

function App() {
    return (
        <Router>      
            <AppRoutes />
            <Footer/>
        </Router>
    );
}

export default App;
