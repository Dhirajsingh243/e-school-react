import React, { useState, useEffect } from 'react';
import '../public/css/dashboard.css'

const Dashboard = () => {
    // const [userInfo, setUserInfo] = useState(null);
    // const [loading, setLoading] = useState(true);
    // const [error, setError] = useState(null);

    // useEffect(() => {
    //     // Example: Fetch user info or dashboard data
    //     const fetchUserInfo = async () => {
    //         try {
    //             // Replace with your actual API call
    //             const response = await fetch('/api/user-info');
    //             const data = await response.json();
    //             setUserInfo(data);
    //             setLoading(false);
    //         } catch (error) {
    //             setError('Failed to load user information.');
    //             setLoading(false);
    //         }
    //     };

    //     fetchUserInfo();
    // }, []);

    // if (loading) {
    //     return <div>Loading...</div>;
    // }

    // if (error) {
    //     return <div>{error}</div>;
    // }

    return (
        <div className="dashboard-container">
            <header className="dashboard-header">
                <h1>Welcome to Your Octowl-School</h1>
            </header>
            <section className="dashboard-content">
                <div className="user-info">
                    <h2>User Information</h2>              
                </div>
                <div className="dashboard-stats">
                    <h2>Statistics</h2>
                    <p>Here you can display some statistics, graphs, or other relevant data.</p>
                </div>
                <div className="dashboard-actions">
                    <h2>Actions</h2>
               
                </div>
            </section>
        </div>
    );
};

export default Dashboard;
