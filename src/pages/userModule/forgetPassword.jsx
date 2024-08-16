import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './css/forgetPassword.css'; // Import custom CSS if necessary
import 'bootstrap-icons/font/bootstrap-icons.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faLock ,faKey} from '@fortawesome/free-solid-svg-icons';

const ForgetPassword = () => {
    const [studentId, setStudentId] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Implement the logic to handle the forget password functionality
        const userData = {
            studentId,
            password,
        };

        // Mock API call (replace with actual API call)
        try {
            // Assume an API call here to submit the data
            setMessage('Password reset successful.'); // Update this based on actual API response
        } catch (error) {
            console.error('Error resetting password:', error);
            setMessage('An error occurred while resetting the password.');
        }
    };

    return (
        <div className="container d-flex justify-content-center align-items-center vh-100">
            <div className="card p-4 shadow-lg" style={{ maxWidth: '400px', width: '100%' }}>
                <h2 className="text-center mb-4">Forget Password</h2>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="studentId" className="form-label"><FontAwesomeIcon icon={faUser} /> Student ID</label>
                        <input
                            type="text"
                            id="studentId"
                            className="form-control"
                            value={studentId}
                            onChange={(e) => setStudentId(e.target.value)}
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label"><FontAwesomeIcon icon={faLock} />  New Password</label>
                        <input
                            type="password"
                            id="password"
                            className="form-control"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="btn btn-primary w-100">Reset Password</button>
                </form>
                {message && <p className="alert alert-info mt-3 text-center">{message}</p>}
            </div>
        </div>
    );
};

export default ForgetPassword;
