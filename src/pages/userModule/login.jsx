import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_ROUTES } from '../../config/api.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock ,faKey} from '@fortawesome/free-solid-svg-icons';


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await axios.post(API_ROUTES.LOGIN, {
                email,
                password,
            });

            if (response.status === 200) {
                navigate('/dashboard');
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
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-4">STUDENT LOGIN</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="email" className="form-label"><FontAwesomeIcon icon={faUser} /> USER-ID</label>
                        <input
                            type="text"
                            id="userId"
                            placeholder='USER-ID'
                            className="form-control"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label"><FontAwesomeIcon icon={faLock} /> Password</label>
                        <input
                            type="password"
                            id="password"
                            placeholder='Password'
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <div className="alert alert-danger text-center">{error}</div>}
                    <button type="submit" className="btn btn-primary w-100"><FontAwesomeIcon icon={faLock} /> Submit</button>
                    <div className="text-center mt-3">
                        <h6 className="text-primary cursor-pointer" onClick={() => navigate('/forgetPassword')}>
                        <FontAwesomeIcon icon={faKey} /> Forget Password
                        </h6>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Login;
