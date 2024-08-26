import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/header.css'; // Ensure you have the correct path for the CSS file
import Logout from '../userModule/logout';
const Header = () => {
    return (
        <header className="bg-primary text-white p-3">
            <div className="container d-flex justify-content-between align-items-center">
                <h1 className="m-0">Octowl-School</h1>
                <nav>
                    <ul className="nav">
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/dashboard"><b>DASHBOARD</b></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/profile"><b>ATTENDENCE</b></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/class"><b>CLASS</b></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/reports"><b>REPORTS</b></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-white" href="/admin"><b>ADMIN</b></a>
                        </li>
                        <li className="nav-item">
                            <Logout />                  
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;
