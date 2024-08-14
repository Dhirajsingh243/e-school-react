import React, { useState } from 'react';
import './css/login.css'; // Ensure the correct path to your CSS file
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); // Initialize useNavigate

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post('https://yourapi.com/login', {
                email,
                password,
            });

            if (response.status === 200) {
                // Assuming the API returns a success message or token
                navigate('/dashboard'); // Use navigate to redirect
            } else {
                setError(response.data.message || 'Login failed. Please try again.');
            }
        } catch (error) {
            if (error.response && error.response.data) {
                setError(error.response.data.message || 'An error occurred. Please try again later.');
            } else {
                setError('An error occurred. Please try again later.');
            }
        }
    };

    return (
        <div className="login-container">
            <h2 className="login-heading">Login</h2>
            <form onSubmit={handleSubmit} className="login-form">
                <input
                    type="email"
                    placeholder="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="login-input"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    className="login-input"
                />
                {error && <div className="login-error">{error}</div>}
                <button type="submit" className="login-button">Submit</button>
            </form>
        </div>
    );
};

export default Login;
