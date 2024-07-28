// ManagerDashboard.js
import React from 'react';
import { useAuth } from './AuthContext';

const ManagerDashboard = () => {
    const { managerAuth, logoutManager } = useAuth();

    if (!managerAuth) {
        return <div>Please login as manager</div>;
    }

    return (
        <div>
            <h1>Manager Dashboard</h1>
            <button onClick={logoutManager}>Logout</button>
            {/* Manager-specific content */}
        </div>
    );
};

export default ManagerDashboard;