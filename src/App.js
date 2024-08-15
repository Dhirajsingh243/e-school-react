import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import AppRoutes from './pages/routes.jsx'; // Import the updated Routes component
import Header from './pages/elements/header.jsx';
import Footer from './pages/elements/footer.jsx';

function App() {
    return (
        <Router>
            <Header/>
            <AppRoutes />
            <Footer/>
        </Router>
    );
}

export default App;
