import React from 'react';
import './css/header.css'; // Ensure you have the correct path for the CSS file

const Header = () => {
    return (
        <header className="header-container">
            <div className="header-content">
                <h1>Octowl-School</h1>
                <nav>
                    <ul className="header-nav">
                        <li><a href="/dashboard">Dashboard</a></li>
                        <li><a href="/profile">Attendence</a></li>
                        <li><a href="/profile">Class</a></li>
                        <li><a href="/profile">Reports</a></li>
                        <li><a href="/admin">Admin</a></li>
                        <li><a href="/logout">Logout</a></li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
