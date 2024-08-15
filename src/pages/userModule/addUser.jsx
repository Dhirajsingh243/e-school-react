import React, { useState } from 'react';
import axios from 'axios';
import './css/addUser.css'; // Ensure the correct path for your CSS file

const AddUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('user'); // Default role
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            name,
            email,
            role,
        };

        try {
            const response = await axios.post('https://your-api-url.com/api/add-user', userData);
            if (response.status === 200) {
                setMessage('User added successfully!');
                setName('');
                setEmail('');
                setRole('user');
            } else {
                setMessage('Failed to add user.');
            }
        } catch (error) {
            console.error('Error adding user:', error);
            setMessage('An error occurred while adding the user.');
        }
    };

    return (
        <div className="add-user-container">
            <h2>Add New User</h2>
            <form onSubmit={handleSubmit} className="add-user-form">
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                        type="text"
                        id="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                        type="email"
                        id="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                        <option value="editor">Editor</option>
                    </select>
                </div>
                <button type="submit" className="submit-button">Add User</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default AddUser;
