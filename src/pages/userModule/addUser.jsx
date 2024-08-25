import React, { useState } from 'react';
import axios from 'axios';
import './css/addUser.css'; // Ensure the correct path for your CSS file

const AddUser = () => {
    const [userId, setUserId] = useState('');
    const [fullName, setFullName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [gender, setGender] = useState('');
    const [dob, setDob] = useState('');
    const [doj, setDoj] = useState('');
    const [role, setRole] = useState('user'); // Default role
    const [status, setStatus] = useState('active'); // Default status
    const [className, setClassName] = useState('');
    const [rollNo, setRollNo] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const userData = {
            user_id: userId,
            fullName,
            email,
            address,
            city,
            gender,
            dob,
            doj,
            role,
            status,
            class: className,
            roll_no: rollNo,
        };

        try {
            const response = await axios.post('https://your-api-url.com/api/add-user', userData);
            if (response.status === 200) {
                setMessage('User added successfully!');
                setUserId('');
                setFullName('');
                setEmail('');
                setAddress('');
                setCity('');
                setGender('');
                setDob('');
                setDoj('');
                setRole('user');
                setStatus('active');
                setClassName('');
                setRollNo('');
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
                    <label htmlFor="userId">Student ID</label>
                    <input
                        type="text"
                        id="userId"
                        value={userId}
                        onChange={(e) => setUserId(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="fullName">Full Name</label>
                    <input
                        type="text"
                        id="fullName"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
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
                    <label htmlFor="address">Address</label>
                    <input
                        type="text"
                        id="address"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="city">City</label>
                    <input
                        type="text"
                        id="city"
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="gender">Gender</label>
                    <select id="gender" value={gender} onChange={(e) => setGender(e.target.value)} required>
                        <option value="">Select Gender</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="dob">Date of Birth</label>
                    <input
                        type="date"
                        id="dob"
                        value={dob}
                        onChange={(e) => setDob(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="doj">Date of Joining</label>
                    <input
                        type="date"
                        id="doj"
                        value={doj}
                        onChange={(e) => setDoj(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="role">Role</label>
                    <select id="role" value={role} onChange={(e) => setRole(e.target.value)} required>
                        <option value="user">User</option>
                        <option value="admin">Admin</option>
                        <option value="editor">Editor</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="status">Status</label>
                    <select id="status" value={status} onChange={(e) => setStatus(e.target.value)} required>
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="class">Class</label>
                    <input
                        type="text"
                        id="class"
                        value={className}
                        onChange={(e) => setClassName(e.target.value)}
                    />
                </div>
                <div className="form-group">
                    <label htmlFor="rollNo">Roll No</label>
                    <input
                        type="text"
                        id="rollNo"
                        value={rollNo}
                        onChange={(e) => setRollNo(e.target.value)}
                    />
                </div>
                <button type="submit" className="submit-button">Add User</button>
            </form>
            {message && <p className="message">{message}</p>}
        </div>
    );
};

export default AddUser;
