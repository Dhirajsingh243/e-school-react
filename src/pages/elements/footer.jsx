import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/footer.css'; // Ensure you have the correct path for the CSS file

const Footer = () => {
    return (
        <footer className="bg-primary text-white text-center py-3 fixed-bottom">
            <div className="container">
                <p className="mb-0"><b>Website by E-school Presence. © 2024 E-school Corporation. All rights reserved.</b></p>
            </div>
        </footer>
    );
};

export default Footer;
