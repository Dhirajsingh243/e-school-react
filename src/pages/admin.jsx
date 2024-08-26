import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../public/css/admin.css'; // Ensure you have the correct path for the CSS file
import { API_ROUTES } from '../config/api.js'
import axios from 'axios';

const Admin = () => {
    const navigate = useNavigate();

    const handleNavigation = (path, event) => {
        if (event) {
            event.stopPropagation(); // Prevent the parent onClick from firing
        }
        navigate(`/${path}`);
    };
    const userReport = async (event) => {
        if (event) {
            event.stopPropagation(); // Ensure propagation is stopped here too
            console.log('User report triggered'); // Debug log
            try {
                const response = await axios.get(API_ROUTES.USER_REPORT);
                console.log(response.data, "response");
            } catch (error) {
                console.error("Error fetching user report:", error);
            }
        } else {
            console.warn("No event passed to userReport"); // Debug log
        }
    };

    return (
        <div className="admin-card-container">
            <div className="admin-card" onClick={() => handleNavigation('courseModule')}>
                <h3>Course Module</h3>
                <ul>
                    <li onClick={(e) => handleNavigation('addCourse', e)}>Add Course</li>
                    <li onClick={(e) => handleNavigation('editCourse', e)}>Edit Course</li>
                    <li onClick={(e) => handleNavigation('viewCourses', e)}>View Courses</li>
                </ul>
            </div>
            <div className="admin-card">
                <h3>User Module</h3>
                <ul>
                    <li onClick={(e) => handleNavigation('addUser', e)}>Add User</li>
                    <li onClick={(e) => handleNavigation('userList', e)}>Edit User</li>
                    <li onClick={(e) => handleNavigation('uploadUsers', e)}>Upload Users</li>
                </ul>
            </div>
            <div className="admin-card" onClick={() => handleNavigation('attendanceTrack')}>
                <h3>Attendance Track</h3>
                <ul>
                    <li onClick={(e) => handleNavigation('markAttendance', e)}>Mark Attendance</li>
                    <li onClick={(e) => handleNavigation('viewAttendance', e)}>View Attendance</li>
                    <li onClick={(e) => handleNavigation('attendanceReports', e)}>Attendance Reports</li>
                </ul>
            </div>
            <div className="admin-card" onClick={() => handleNavigation('reports')}>
                <h3>Reports</h3>
                <ul>
                    <li onClick={(e) => handleNavigation('dailyReports', e)}>Daily Reports</li>
                    <li onClick={(e) => handleNavigation('weeklyReports', e)}>Weekly Reports</li>
                    <li onClick={(e) => userReport(e)}>User Detils</li>                  
                </ul>
            </div>
        </div>
    );
};

export default Admin;
