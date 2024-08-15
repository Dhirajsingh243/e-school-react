import React from 'react';
import './css/footer.css'; // Ensure you have the correct path for the CSS file

const Footer = () => {
    return (
        <footer className="footer-container">
            <div className="footer-content">
                <p>&copy; {new Date().getFullYear()} My Application. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
