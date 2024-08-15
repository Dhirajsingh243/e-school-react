import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './css/editUser.css';  // Ensure the correct path for your CSS file
import { useParams } from 'react-router-dom';

const EditUser = () => {
    const { id } = useParams(); // Get user ID from URL params
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [role, setRole] = useState('user'); // Default role
    const [message, setMessage] = useState('');

    useEffect(() => {
        // Fetch the user's current data
        const fetchUserData = async () => {
            try {
                const response = await axios.get(`https://your-api-url.com/api/users/${id}`);
                if (response.status === 200) {
                    const { name, email, role } = response.data;
                    setName(name);
                    setEmail(email);
                    setRole(role);
                } else {
                    setMessage('Failed to load user data.');
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
                setMessage('An error occurred while fetching the user data.');
            }
        };

        fetchUserData();
    }, [id]);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            name,
            email,
            role,
        };

        try {
            const response = await axios.put(`https://your-api-url.com/api/users/${id}`, userData);
            if (response.status === 200) {
                setMessage('User updated successfully!');
            } else {
                setMessage('Failed to update user.');
            }
        } catch (error) {
            console.error('Error updating user:', error);
            setMessage('An error occurred while updating the user.');
        }
    };

    return (
        <div className="edit-user-container">
            <h2>Edit User</h2>
            <form onSubmit={handleSubmit} className="edit-user-form">
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
                <button type="submit" className="submit-button">Update User</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default EditUser;
