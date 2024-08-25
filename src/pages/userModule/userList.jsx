import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { API_ROUTES } from '../../config/api.js'; // Ensure this path is correct
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock,faLockOpen ,faPenToSquare  } from '@fortawesome/free-solid-svg-icons';
const UserList = () => {
    const [users, setUsers] = useState([]);
    const [message, setMessage] = useState('');
    const [searchText, setSearchText] = useState(''); // State for search input

    useEffect(() => {
        const fetchUsers = async () => {
            const token = localStorage.getItem('token'); // Retrieve token from local storage

            try {
                const response = await axios.get(API_ROUTES.USERLIST, {
                    headers: {
                        'token': token ? token : '',
                        'Content-Type': 'application/json',
                    },
                });
                if (response.status === 200) {             
                    setUsers(response.data.User);
                } else {
                    setMessage('Failed to load users data.');
                }
            } catch (error) {
                console.error('Error fetching users data:', error);
                setMessage('An error occurred while fetching the users data.');
            }
        };

        fetchUsers();
    }, []);

    // Filter users based on the search input
    const filteredUsers = users.filter(user => 
        user.name.toLowerCase().includes(searchText.toLowerCase()) || 
        user.user_id.toLowerCase().includes(searchText.toLowerCase())
    );

    return (
        <div className="container mt-5">
            <h2 className="text-center">User List</h2>
            {message && <div className="alert alert-danger text-center">{message}</div>}
            <div className="mb-3">
                <input 
                    type="text" 
                    placeholder="Search by name or ID" 
                    className="form-control" 
                    value={searchText} 
                    onChange={e => setSearchText(e.target.value)} 
                />
            </div>
            <table className="table table-striped table-hover mt-4">
                <thead className="thead-dark">
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Student-ID</th>
                        <th scope="col">Student Name</th>
                        <th scope="col">Address</th>         
                        <th scope="col">Role</th>
                        <th scope="col">Status</th>
                        <th scope="col">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredUsers.length > 0 ? (
                        filteredUsers.map((user, index) => (
                            <tr key={user.id}>
                                <th scope="row">{index + 1}</th> {/* Auto-incrementing index */}
                                <td><FontAwesomeIcon icon={faPenToSquare}/>  {user.user_id}</td>
                                <td>{user.name}</td>
                                <td>{user.address}</td>
                                <td>{user.role}</td>
                                <td>{user.status}</td>
                                <td>
                                    {/* Conditionally render lock icon */}
                                    {user.isActive ? (
                                        <FontAwesomeIcon icon={faLockOpen} />
                                    ) : (
                                        <FontAwesomeIcon icon={faLock} />
                                    )}
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="7" className="text-center">No users found</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default UserList;
