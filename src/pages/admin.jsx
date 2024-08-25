import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../public/css/admin.css'; // Ensure you have the correct path for the CSS file

const Admin = () => {
    const navigate = useNavigate();

    const handleNavigation = (path, event) => {
        if (event) {
            event.stopPropagation(); // Prevent the parent onClick from firing
        }
        navigate(`/${path}`); 
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
                    <li onClick={(e) => handleNavigation('monthlyReports', e)}>Monthly Reports</li>
                </ul>
            </div>
        </div>
    );
};

export default Admin;
