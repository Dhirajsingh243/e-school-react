import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { API_ROUTES } from '../../config/api.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock,faEye, faKey , faEyeSlash  } from '@fortawesome/free-solid-svg-icons';

const Login = () => {
    const [user_id, setuserId] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const navigate = useNavigate(); 

    // Define hardcoded credentials
    const hardcodeduserId = '12345';
    const hardcodedPassword = 'admin123';
    const togglePasswordVisibility = () => {
        setShowPassword(prevState => !prevState);
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        setError('');

        // Trim the input values to avoid issues with extra spaces
        const trimmedUserId = user_id.trim();
        const trimmedPassword = password.trim();

        // Debugging logs
        // console.log('Entered User ID:', trimmedUserId);
        // console.log('Entered Password:', trimmedPassword);

        // Check if the entered credentials match the hardcoded ones
        // if (trimmedUserId === hardcodeduserId && trimmedPassword === hardcodedPassword) {
        //     console.log('Hardcoded credentials matched. Redirecting to dashboard.');
        //     navigate('/dashboard');
        //     return; // Skip API call since credentials are hardcoded
        // }

        try {
            const response = await axios.post(API_ROUTES.LOGIN, {
                user_id: trimmedUserId,
                password: trimmedPassword,
            });
            console.log(response,"response");
            if (response.status === 200) {
                navigate('/dashboard');
                localStorage.setItem('token', response.data.token);
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
                <h2 className="text-center mb-4"><b> STUDENT LOGIN</b></h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="user_id" className="form-label"><FontAwesomeIcon icon={faUser} /> <b>USER-ID</b></label>
                        <input
                            type="text"
                            id="user_id"
                            placeholder='USER-ID'
                            className="form-control"
                            value={user_id}
                            onChange={(e) => setuserId(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            <FontAwesomeIcon icon={faLock} /><b> Password</b> 
                        </label>
                        <div className="input-group">
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
                                placeholder="Password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <span className="input-group-text" onClick={togglePasswordVisibility} style={{ cursor: 'pointer' }}>
                                <FontAwesomeIcon icon={showPassword ? faEyeSlash : faEye} />
                            </span>
                        </div>
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
