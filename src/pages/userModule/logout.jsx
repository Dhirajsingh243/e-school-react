import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt } from '@fortawesome/free-solid-svg-icons';

function Logout() {
    const navigate = useNavigate(); 
    const handleLogout = (event) => {
        event.preventDefault();
        const token = localStorage.getItem('token');
        if (token) {
            localStorage.removeItem('token');
            navigate('/login');
        } else {
            navigate('/login');
        }
    };

    return (
        <li className="nav-item">
            <a className="nav-link text-white" href="/logout" onClick={handleLogout}>
                <FontAwesomeIcon icon={faSignOutAlt} />
            </a>                   
        </li>
    );
}

export default Logout;
