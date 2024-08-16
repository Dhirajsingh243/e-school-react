import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './elements/header.jsx';
import '../public/css/dashboard.css'; // Ensure you have the correct path for the CSS file

const Dashboard = () => {
    return ( 
        <div className="container mt-4"> 
            <header className="bg-success text-white text-center py-3 rounded">
                <h1>Welcome to Your Octowl-School</h1>
            </header>
            <section className="row mt-4">
                <div className="col-md-4 mb-4">
                    <div className="bg-light p-3 border rounded">
                        <h2>User Information</h2>
                        <p>Details about the user.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="bg-light p-3 border rounded">
                        <h2>Statistics</h2>
                        <p>Here you can display some statistics, graphs, or other relevant data.</p>
                    </div>
                </div>
                <div className="col-md-4 mb-4">
                    <div className="bg-light p-3 border rounded">
                        <h2>Actions</h2>
                        <button className="btn btn-success mb-2">Action 1</button>
                        <button className="btn btn-success mb-2">Action 2</button>
                        <button className="btn btn-success mb-2">Action 3</button>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
