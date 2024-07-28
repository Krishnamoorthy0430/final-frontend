
// ResidentDashboard.js
import React from 'react';

const ResidentDashboard = () => {
    const { residentAuth, logoutResident } = useAuth();

    if (!residentAuth) {
        return <div>Please login as resident</div>;
    }

    return (
        <div>
            <h1>Resident Dashboard</h1>
            <button onClick={logoutResident}>Logout</button>
            {/* Resident-specific content */}
        </div>
    );
};

export default ResidentDashboard;
